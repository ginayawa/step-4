from sqlalchemy.orm import Session
from . import models, schemas
from datetime import datetime
from sqlalchemy import func  


def create_item(db: Session, item: schemas.createItem):
  db_item = models.Item(
    # prd_id=item.prd_id,
    prd_cd=item.prd_cd,
    prd_name=item.prd_name,
    prd_price=item.prd_price
    )
  db.add(db_item)
  db.commit()
  db.refresh(db_item)
  return db_item

def get_items(db: Session):
  return db.query(models.Item).all()


def get_item(db: Session, prd_cd: str):
  return db.query(models.Item).filter(models.Item.prd_cd==prd_cd).first()




def create_tran_and_detail(db: Session, purchase: schemas.Purchase):
    # トランザクションの作成
    db_tran = models.Tran(
        date_time=datetime.now(),
        emp_cd=purchase.emp_cd,
        store_cd=purchase.store_cd,
        pos_no=purchase.pos_no,
        total_amt=purchase.total_amt,
        ttl_amt_ex_tax=purchase.ttl_amt_ex_tax
    )
    db.add(db_tran)
    db.commit()
    # db.refresh(db_tran)

    # トランザクションディテールの作成
    for item in purchase.items:
        db_tran_detail = models.TranDetail(
            trd_id=db_tran.trd_id,  # 作成したトランザクションのIDを関連付ける
            prd_cd=item.prd_cd,
            prd_name=item.prd_name,
            prd_price=item.prd_price,
            tax_cd=item.tax_cd
        )
        db.add(db_tran_detail)
        db.commit()
        db.refresh(db_tran_detail)

    return {
       'status':'success',
       'message':{"合計金額": db_tran.total_amt, "合計金額（税抜）": db_tran.ttl_amt_ex_tax},
       }

  
