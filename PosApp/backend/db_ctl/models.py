from sqlalchemy import Column, ForeignKey, Integer, String, DateTime, Float,Date
from .database import Base


class Item(Base):
  __tablename__ = 'items'
  prd_id = Column(Integer, primary_key=True)
  prd_cd = Column(String(13), unique=True, nullable=False)
  prd_name = Column(String(100), nullable=False)
  pac_unit = Column(String(20), nullable=False)
  sale_company = Column(String(100))
  mnf_company = Column(String(100))
  ingrdnt = Column(String(200), nullable=False)
  prd_price = Column( Integer , nullable=False)
  smd_yn_fg = Column(String(1), nullable=False)


class Tran(Base):
  __tablename__ = 'trans'
  trd_id = Column(Integer, primary_key=True, autoincrement=True)
  mbr_id = Column(Integer, ForeignKey('members.mbr_id', ondelete='SET NULL'))
  date_time = Column(DateTime)
  emp_cd = Column(String(10))
  store_cd = Column(String(5))
  pos_no = Column(String(3))
  total_amt = Column(Integer)
  ttl_amt_ex_tax = Column(Integer)

class TranDetail(Base):
  __tablename__ = 'tran_details'
  trd_detail_id = Column(Integer, primary_key=True, autoincrement=True)
  trd_id = Column(Integer, ForeignKey('trans.trd_id', ondelete='SET NULL'),autoincrement=True)
  prd_cd = Column(String(13), ForeignKey('items.prd_id'), onupdate='SET NULL')
  prd_name = Column(String(50))
  prd_price = Column(Integer)

class Member(Base):
  __tablename__ = 'members'
  mbr_id = Column(Integer, primary_key=True, autoincrement=True)
  mbr_nm = Column(Integer, unique=True, nullable=False)
  birth_dt = Column(Date)
  sex = Column(String(10))
  pref = Column(String(10))
