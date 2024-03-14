import datetime
from pydantic import BaseModel, Field
from typing import List

class createItem(BaseModel):
  prd_cd: str
  prd_name: str
  prd_price: float
class Item(createItem):
  prd_id: int




class purchaseItem(BaseModel):
  prd_cd: str
  prd_name: str
  prd_price: int
  tax_cd: str
class Purchase(BaseModel):
  emp_cd: str
  store_cd: str
  pos_no: str
  total_amt: int
  ttl_amt_ex_tax: float
  items: List[purchaseItem]