from sqlalchemy import ForeignKey
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column
from datetime import datetime
 

class Base(DeclarativeBase):
    pass


class Items(Base):
    __tablename__ = 'items'
    prd_id:Mapped[int] = mapped_column(primary_key=True)
    code:Mapped[str] = mapped_column()
    name:Mapped[str] = mapped_column()
    price:Mapped[int] = mapped_column()
 

class Purchases(Base):
    __tablename__ = 'purchases'
    trd_id:Mapped[int] = mapped_column(primary_key=True, autoincrement=True)
    datetime:Mapped[datetime] = mapped_column()
    emp_cd:Mapped[str] = mapped_column()
    store_cd:Mapped[str] = mapped_column()
    pos_no:Mapped[str] = mapped_column()
    total_amt:Mapped[int] = mapped_column()

 

class PurchaseDetails(Base):
    __tablename__ = 'purchase_details'
    trd_id:Mapped[int] = mapped_column(ForeignKey("purchases.purchase_id"), primary_key=True)
    dtl_id:Mapped[int] = mapped_column(primary_key=True)
    prod_id:Mapped[int] = mapped_column(ForeignKey("items.prd_id"))
    prod_cd:Mapped[str] = mapped_column()
    prod_name:Mapped[str] = mapped_column()
    prd_price:Mapped[int] = mapped_column()



 