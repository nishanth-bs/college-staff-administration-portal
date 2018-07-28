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

def add_revoked_token():
  pass

def check_if_revoked_token(jti):
  pass


class AccessToken(Resource):
  def get(self):
    return {get_jwt_identity():1}

  @jwt_refresh_token_required
  def post(self):
    current_user = get_jwt_identity()
    access_token = create_access_token(identity=current_user)
    return {'access_token':access_token}


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
app.config['JWT_BLACKLIST_ENABLED'] = True
app.config['JWT_BLACKLIST_TOKEN_CHECKS'] = ['access', 'refresh']


@jwt.token_in_blacklist_loader
def check_if_token_in_blacklist(decrypted_token):
    jti = decrypted_token['jti']

    return is_jti_blacklisted(jti)

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

@jwt_required
def add(jti):
  #jti = get_raw_jwt()['jti']
  QUERY4 = "INSERT INTO `revoked_tokens`( `jti`) VALUES ('%s')" %(jti)
  cursor.execute(QUERY4)
  conn.commit()
  #db.session.add(self)
  #db.session.commit()

def is_jti_blacklisted(jti):
  QUERY3 = "SELECT * FROM `revoked_tokens` WHERE jti = '%s'"%(jti)
  cursor.execute(QUERY3)
  #query = query.filter_by(jti=jti).first()
  if cursor.rowcount == 0:
    return False
  else:
    return True
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
  @jwt_required
  def post(self):
    jti = get_raw_jwt()['jti']
    try:
      add(jti)
      #revoked_token = RevokedTokenModel(jti=jti)
      #revoked_token.add()
      return {'message': 'Access token has been revoked'}
    except:
      return {'message': 'Something went wrong'}, 500


class UserLogoutRefresh(Resource):
  @jwt_refresh_token_required
  def post(self):
    jti = get_raw_jwt()['jti']
    try:
      add(jti)
      #revoked_token = RevokedTokenModel(jti=jti)
      #revoked_token.add()
      return {'message': 'Refresh token has been revoked'}
    except:
      return {'message': 'Something went wrong'}, 500


class TokenRefresh(Resource):
  def post(self):
    return {'message': 'Token refresh'}


class AllUsers(Resource):
  def get(self):
    return {'message': 'List of users'}

  def delete(self):
    return {'message': 'Delete all users'}


class SecretResource(Resource):
  @jwt_required
  def get(self):
    return {
      'answer': get_jwt_identity(),
      1: get_raw_jwt()['jti']
    }

class CollegeDepartments(Resource):
  def get(self):
    #retrieve all the department names
    return ''
  def post(self):
    #TODO: give super admin access
    #able to add new department
    return ''
  def put(self):
    #TODO: give super admin access
    #edit the department details
    return ''
  def delete(self):
    #todo: give super admin access
    #req specification: not sure  if deleting dept option is needed
    return ''

class Teacher(Resource):
  def get(self):
    #retrieve all the teachers of [the current logged in user's dept]
    return ''
  def post(self):
    #add new teacher to the department
    return ''
  def put(self):
    #edit teacher information
    return ''
  def delete(self):
    #remove teacher information
    return ''

class HOD(Resource):
  def get(self):
    #retrieve all the HOD's of the college
    return ''
  def post(self):
    #add new HOD to the department
    return ''
  def put(self):
    #edit HOD information
    return ''
  def delete(self):
    #remove HOD information
    #req specification: not sure
    return ''

class Students(Resource):
  #TODO: Admin access
  def get(self):
    # retrieve all the students of [the current logged in user's dept]
    return ''
  def post(self):
    # add new teacher to the department
    return ''
  def put(self):
    # edit teacher information
    return ''
  def delete(self):
    # remove teacher information
    return ''

class StudentsAttendance(Resource):
  def post(self):
    #return attendance of all the students of ['dept'] ['sem'] ['sec']
    return ''

class StudentsAttendanceEdit(Resource):
  def post(self):
    #update attendance for ['student'] ['subject']
    return ''

class SubjectClasses(Resource):
  def get(self):
    #return all the subjects of all the sem and the number ofclasses
    return ''
  def put(self):
    #update a subject's total number of classes by one
    return ''

class IAMarks(Resource):
  def post(self):
    #return iamarks of all the students of ['dept'] ['sem'] ['sec']
    return ''

class IAMarksEdit(Resource):
  def post(self):
    #allot marks for ['student'] ['subject']
    return ''
  def put(self):
    #edit marks
    return ''

class Scheme(Resource):
  def get(self):
    #get a list of all the schemes
    return ''
  def post(self):
    #add new scheme, all the col of the table
    return ''
  def put(self):
    #edit the given scheme
    return ''

class Subject(Resource):
  def get(self):
    #get all the subjects of a given
    return ''
  def post(self):
    #add subjects
    return ''


api.add_resource(UserRegistration, '/registration')
api.add_resource(UserLogin, '/login')
api.add_resource(UserLogoutAccess, '/logout/access')
api.add_resource(UserLogoutRefresh, '/logout/refresh')
api.add_resource(TokenRefresh, '/token/refresh')
api.add_resource(AllUsers, '/users')
api.add_resource(SecretResource, '/secret')
api.add_resource(AccessToken,'/access')

if __name__ == '__main__':
    app.run(debug=True)
