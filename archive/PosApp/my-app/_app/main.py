
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
import os
from datetime import datetime
import sqlalchemy


app = Flask(__name__)
base_dir = os.path.dirname(__file__)
current_directory = os.getcwd() # カレントディレクトリの取得
db_dir = os.path.abspath(os.path.join(current_directory, '../../db')) # 指定ディレクトリ
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///"+os.path.join(db_dir,"CRM.db")
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

prods = {}


with app.app_context():
    # コンテキスト内でItem.query.all()を呼び出す
    items = Item.query.all()
    for item in items:
        prd_id = item.prd_id
        prd_cd = item.code
        prd_name = item.name
        prd_price = item.price
        prod = {}
        prod['PRD_ID'] = prd_id
        prod['PRD_CD'] = prd_cd
        prod['PRD_NAME'] = prd_name
        prod['PRD_PRICE'] = prd_price
        prods['{}'.format(prd_cd)] = prod



@app.route("/")
def search_product():
    return prods

if __name__=="__main__":
  app.run(debug=True)






#########################################################################
from fastapi import FastAPI, HTTPException, Body, Depends
from starlette.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import pymysql
import os
from datetime import datetime
from dotenv import load_dotenv
from typing import List


app = FastAPI()

# CORSを回避するために追加
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,   # 追記により追加
    allow_methods=["*"],      # 追記により追加
    allow_headers=["*"]       # 追記により追加
)

# .envファイルを読み込む
load_dotenv()


class ProductQuery(BaseModel):
    code: str


@app.get("/")
def read_root():
    return {"Hello": "World"}



# test用
@app.post("/search_product/")
def search_product(product_query: ProductQuery = Body(...)):
    print(f"Received code: {product_query.code}")
    if product_query.code == prod["PRD_CD"]:
        return {
            "status": "success",
            "message": prod
            }
    else:
        return{
            "status": "failed"
        }


@app.post("/search_products/")
def search_product(product_query: ProductQuery = Body(...)):
    return prods