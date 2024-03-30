from unittest.mock import patch
from fastapi.testclient import TestClient
from main import app, get_db, Session
from datetime import datetime

client = TestClient(app)

def test_read_item():
    response = client.get("/items/4981736222712")
    assert response.status_code == 200
    assert response.json() == {
      "prd_name": "アイクリスタ11",
      "prd_cd": "4981736222712",
      "prd_id": 1,
      "mnf_company": "佐賀製薬株式会社",
      "prd_price": 2600,
      "pac_unit": "１５ｍＬ",
      "sale_company": "サンドラッググループ",
      "ingrdnt": "クロルフェニラミン,テトラヒドロゾリン",
      "smd_yn_fg": "1"
    }

