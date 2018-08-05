from flask import Flask
from flask_restful import reqparse, abort, Api, Resource#change to webargs instead of reqparse(deprecated)
from flask_cors import CORS,cross_origin
from flask_jwt_extended import (create_access_token, create_refresh_token, jwt_required, jwt_refresh_token_required, get_jwt_identity, get_raw_jwt,get_jwt_claims, JWTManager)

#TODO: import resources

app = Flask(__name__)


app.config['MYSQL_DATABASE_USER'] = ''
app.config['MYSQL_DATABASE_PASSWORD'] = None
app.config['MYSQL_DATABASE_DB'] = 'collegee'
app.config['MYSQL_DATABASE_HOST'] = '127.0.0.1'
app.config['JWT_SECRET_KEY'] = 'jwt-secret-string' #''.join(random.choice(string.ascii_uppercase + string.digits) for x in xrange(32))
app.config['JWT_BLACKLIST_ENABLED'] = True
app.config['JWT_BLACKLIST_TOKEN_CHECKS'] = ['access', 'refresh']

cors = CORS(app)
api = Api(app)
jwt = JWTManager(app)   #Creates /auth endpoint

#TODO: Add resource endpoints

if __name__ == '__main__':
  from MySQLDb import mysql
  conn = mysql.connect()
  app.run(Debug = True)
