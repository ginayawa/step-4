from sqlalchemy import Column, ForeignKey, Integer, String, DateTime, Float
from .database import Base


class Item(Base):
  __tablename__ = 'items'
  prd_id = Column(Integer, primary_key=True)
  prd_cd = Column(String(255), unique=True, nullable=False)
  prd_name = Column(String(255), nullable=False)
  prd_price = Column( Float , nullable=False)

class Tran(Base):
  __tablename__ = 'trans'
  trd_id = Column(Integer, primary_key=True, autoincrement=True)
  date_time = Column(DateTime)
  emp_cd = Column(String(10))
  store_cd = Column(String(5))
  pos_no = Column(String(3))
  total_amt = Column(Integer)
  ttl_amt_ex_tax = Column(Float)

class TranDetail(Base):
  __tablename__ = 'tran_details'
  trd_detail_id = Column(Integer, primary_key=True, autoincrement=True)
  trd_id = Column(Integer, ForeignKey('trans.trd_id', ondelete='SET NULL'),autoincrement=True)
  prd_cd = Column(String(13), ForeignKey('items.prd_id'), onupdate='SET NULL')
  prd_name = Column(String(50))
  prd_price = Column(Integer)
  tax_cd = Column(String(2))

