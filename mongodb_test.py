import pymongo
import datetime
from pymongo import MongoClient



cluster = MongoClient("mongodb://localhost:27017")

db = cluster["Sensordata"]
collection = db["Temp"]


test = {"_id": 0, "temp": 25, "timeField": datetime.datetime.utcnow()}


collection.insert_one(test)