from flask import Flask, redirect, url_for, request
from pymongo import MongoClient
from dotenv import dotenv_values
import jwt

config = dotenv_values()

def decode_auth_token(request):
    """
    Decodes the auth token
    :param auth_token:
    :return: integer|string
    """
    try:
        payload = jwt.decode(auth_token, config['SECRET_KEY'])

        print(payload)
        print(authorization_header)
        return payload['sub']
    except jwt.ExpiredSignatureError:
        return 'Signature expired. Please log in again.'
    except jwt.InvalidTokenError:
        return 'Invalid token. Please log in again.'


app = Flask(__name__)

cluster = MongoClient(config["MONGO_URI"])
db = cluster["mytable"]
collection = db["user-data"]

# collection.insertOne({email: "qq", password: "qq", username: "qq", quote: 0, __v: 0})

@app.route('/api/user', methods=["POST"])
def bin_connect():
   authorization_header = request.headers.get('Authorization')
   token = authorization_header.split('Bearer ')[1]


   return f"<h1>HELLO WORLD</h1>"



if __name__ == '__main__':
   app.run(debug = True, port = 8080)
