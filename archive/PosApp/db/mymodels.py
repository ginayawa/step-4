from flask import Flask
from flask_sqlalchemy import SQLAlchemy
import os
from datetime import datetime

app = Flask(__name__)
base_dir = os.path.dirname(__file__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///"+os.path.join(base_dir,"CRM.db")
db = SQLAlchemy(app)


class Item(db.Model):
  __tablename__="items"
  prd_id = db.Column(db.Integer,primary_key=True)
  code = db.Column(db.String,primary_key=True)
  name = db.Column(db.String)
  price = db.Column(db.Integer)

  def __init__(self,prd_id,code,name,price):
    self.prd_id = prd_id
    self.code = code
    self.name = name
    self.price = price



class Purchase(db.Model):
  __tablename__ = "purchases"
  trd_id = db.Column(db.Integer,primary_key=True,autoincrement=True)
  datetime = db.Column(db.DateTime)
  emp_cd = db.Column(db.String)
  store_cd = db.Column(db.String)
  pos_no = db.Column(db.String)
  total_amt = db.Column(db.Integer)

  def __init__(self,datetime,emp_cd,store_cd,pos_no,total_amt):
    self.datetime = datetime
    self.emp_cd = emp_cd
    self.store_cd =store_cd
    self.pos_no = pos_no
    self.total_amt = total_amt



class PurchaseDetail(db.Model):
  __tablename__ = "purchase_details"
  dtl_id = db.Column(db.Integer,primary_key=True,autoincrement=True)
  trd_id = db.Column(db.Integer)
  prd_id = db.Column(db.Integer)
  prd_cd = db.Column(db.String)
  prd_name = db.Column(db.String)
  prd_price = db.Column(db.Integer)  
  def __init__(self,trd_id,prd_id,prd_cd,prd_name,prd_price):
    self.trd_id =  trd_id
    self.prd_id = prd_id
    self.prd_cd = prd_cd
    self.prd_name = prd_name
    self.prd_price = prd_price





with app.app_context():
  db.create_all()

