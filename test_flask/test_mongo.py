from flask import Flask, redirect, url_for, request
from pymongo import MongoClient
from dotenv import dotenv_values

config = dotenv_values()

app = Flask(__name__)

cluster = MongoClient("mongodb+srv://Wolfteam111:Wolfteam111@atlascluster.sfflokd.mongodb.net/mytable?retryWrites=true&w=majority")
db = cluster["mytable"]
collection = db["user-data"]


post = {"email": "qq", "password": "qq", "username": "qq", "quote": 0, "__v": 0}
collection.find_one()