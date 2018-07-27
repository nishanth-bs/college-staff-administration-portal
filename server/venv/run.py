from flask import Flask
from flask_restful import reqparse, abort, Api, Resource
from flask_cors import CORS,cross_origin
from flaskext.mysql import MySQL
from passlib.hash import pbkdf2_sha256 as sha256
from flask_jwt_extended import (create_access_token, create_refresh_token, jwt_required, jwt_refresh_token_required, get_jwt_identity, get_raw_jwt, JWTManager)
import random, string

def generate_hash(password):
  return sha256.hash(password)

def verify_hash(password, hash):
  return sha256.verify(password, hash)

#import resources
app = Flask(__name__)
api = Api(app)
cors = CORS(app)
mysql = MySQL()
app.config['MYSQL_DATABASE_USER'] = ''
app.config['MYSQL_DATABASE_PASSWORD'] = None
app.config['MYSQL_DATABASE_DB'] = 'collegee'
app.config['MYSQL_DATABASE_HOST'] = '127.0.0.1'

app.config['JWT_SECRET_KEY'] = 'jwt-secret-string' #''.join(random.choice(string.ascii_uppercase + string.digits) for x in xrange(32))
jwt = JWTManager(app)

mysql.init_app(app)
conn = mysql.connect()
cursor =conn.cursor()
 #views, models,

parser = reqparse.RequestParser()
#making sure that the username and password keys won't be null (required = True)
parser.add_argument('username', help = 'This field cannot be blank', required = True)
parser.add_argument('password', help = 'This field cannot be blank', required = True)

QUERY1 = "INSERT INTO `signup_and_login_users_table`(`dept_id`, `fullname`, `username`, `password`, `user_levels`,`email`,`phone`) VALUES (1,'as','%s','%s',0,0,0)"
QUERY2 = "SELECT * FROM `signup_and_login_users_table` where username = '%s'"
class UserRegistration(Resource):
  def post(self):
    data = parser.parse_args()
    username, password = data['username'], generate_hash(data['password'])
    try:
      cursor.execute(QUERY1 % (username,password))
      conn.commit()
      access_token = create_access_token(identity=data['username'])
      refresh_token = create_refresh_token(identity=data['username'])
      return {
        (QUERY1) % (username, password): 'User {} was created'.format(data['username']),
        'access_token': access_token,
        'refresh_token': refresh_token
      }
    except:
      return {'message': (QUERY1)%(username,password)}, 500

class UserLogin(Resource):
  def post(self):
    data = parser.parse_args()
    username, password = data['username'], data['password']
    current_user = cursor.execute(QUERY2 % (username))
    #current_user = UserModel.find_by_username(data['username'])
    #return {cursor.fetchone()[4]:QUERY2 % (username)}
    if cursor.rowcount == 0 or cursor.rowcount == None:
      return {QUERY2 % (username): 'User {} doesn\'t exist'.format(data['username'])}
    result_set = cursor.fetchone()

    if verify_hash(data['password'], result_set[4]):
      access_token = create_access_token(identity=data['username'])
      refresh_token = create_refresh_token(identity=data['username'])
      return {
        'message': 'Logged in as {}'.format(result_set[3]),#current_user.username),
        'access_token': access_token,
        'refresh_token': refresh_token
      }
    else:
      return {'message': 'Wrong credentials'}
    return data


class UserLogoutAccess(Resource):
  def post(self):
    return {'message': 'User logout'}


class UserLogoutRefresh(Resource):
  def post(self):
    return {'message': 'User logout'}


class TokenRefresh(Resource):
  def post(self):
    return {'message': 'Token refresh'}


class AllUsers(Resource):
  def get(self):
    return {'message': 'List of users'}

  def delete(self):
    return {'message': 'Delete all users'}


class SecretResource(Resource):
  def get(self):
    return {
      'answer': 42
    }

api.add_resource(UserRegistration, '/registration')
api.add_resource(UserLogin, '/login')
api.add_resource(UserLogoutAccess, '/logout/access')
api.add_resource(UserLogoutRefresh, '/logout/refresh')
api.add_resource(TokenRefresh, '/token/refresh')
api.add_resource(AllUsers, '/users')
api.add_resource(SecretResource, '/secret')

if __name__ == '__main__':
    app.run(debug=True)
