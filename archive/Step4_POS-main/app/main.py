from fastapi import FastAPI, HTTPException, Body
from starlette.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import sqlite3
import os
from dotenv import load_dotenv

app = FastAPI()

# CORSを回避するために追加
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

# .envファイルを読み込む
load_dotenv()

# データベースファイルのパスを環境変数から取得（または直接指定）
DB_FILE = os.getenv("DB_FILE", "mydatabase.db")

# データベース接続関数
def get_db_connection():
    connection = sqlite3.connect(DB_FILE)
    connection.row_factory = sqlite3.Row  # 辞書形式で結果を取得できるようにする
    return connection

class ProductQuery(BaseModel):
    code: str

@app.get("/")
def read_root():
    return {"Hello": "World"}

# 商品情報取得のエンドポイント
@app.post("/search_product/")
def search_product(product_query: ProductQuery = Body(...)):
    connection = get_db_connection()
    try:
        cursor = connection.cursor()
        sql = "SELECT * FROM products WHERE PRD_CD = ?"
        cursor.execute(sql, (product_query.code,))
        result = cursor.fetchone()
        if result:
            return {
                "status": "success",
                "message": dict(result)
            }
        else:
            return {
                "status": "failed",
                "message": "Product not found"
            }
    finally:
        connection.close()