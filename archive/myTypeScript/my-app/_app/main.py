from fastapi import FastAPI, HTTPException, Body, Depends
from starlette.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import pymysql
import os
from datetime import datetime
from dotenv import load_dotenv
from typing import List
from db_control import crud, mymodels


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


drink = [
    {
    "PRD_ID":"001",
    "PRD_CD": "4902220772414",
    "PRD_NAME": "クリアアサヒ",
    "PRD_PRICE": "178"
    },
    {
    "PRD_ID":"002",
    "PRD_CD": "4901330560782",
    "PRD_NAME": "堅あげポテト プッチ４ うすしお味",
    "PRD_PRICE": "158"
    },
    {
    "PRD_ID":"003",
    "PRD_CD": "4902777026107",
    "PRD_NAME": "ミルクチョコレートＢＯＸ 120g",
    "PRD_PRICE": "358"
    },
    {
    "PRD_ID":"004",
    "PRD_CD": "9784860642464",
    "PRD_NAME": "本",
    "PRD_PRICE": "1700"
    },
]

items = crud.myselectAll(mymodels.Product)
# drink = [{"id":"1","code":"49716351","name":"ハウス バジル 瓶 4g","price":"120"},]

# test用
@app.post("/search_product/")
def search_product(product_query: ProductQuery = Body(...)):
    print(f"Received code: {product_query.code}")
    for product in drink:
        if product_query.code == product["PRD_CD"]:
            return {
                "status": "success",
                "message": product  # 一致した製品の情報を返す
            }
    return {
        "status": "failed",
        "message": "Product not found"
    }



print(items)