from datetime import datetime,date
from pydantic import BaseModel, Field
from typing import List

class createItem(BaseModel):
  prd_cd : str
  prd_name : str
  pac_unit : str
  sale_company : str
  mnf_company : str
  ingrdnt : str
  prd_price : int
  smd_yn_fg : str
class Item(createItem):
  prd_id: int




class purchaseItem(BaseModel):
  prd_cd: str
  prd_name: str
  prd_price: int
class Purchase(BaseModel):
  mbr_id : int
  emp_cd: str
  store_cd: str
  pos_no: str
  total_amt: int
  ttl_amt_ex_tax: float
  items: List[purchaseItem]



class createMember(BaseModel):
  mbr_nm: str
  birth_dt: date
  sex: str
  pref: str
class Member(createMember):
  mbr_id: int
