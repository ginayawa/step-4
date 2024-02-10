from fastapi import FastAPI, HTTPException
from pydantic import BaseModel

app = FastAPI()


class Item(BaseModel):
    x: int
    y: int



@app.post("/multiply")
def double_number(item: Item):
    return {
        "x": item.x,
        "y": item.y,
        "formula": str(item.x) + "*" + str(item.y),
        "result": item.x * item.y
        }




# uvicorn main:app --reload をターミナルで実行