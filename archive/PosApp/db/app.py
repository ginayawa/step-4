from flask import render_template, request, redirect, url_for 
from mymodels import app,db,Item,Purchase,PurchaseDetail
import sqlalchemy
import pandas as pd

# ページ遷移
@app.route("/")
def index():
  return render_template("index.html")

@app.route("/item")
def item():
  items = Item.query.all()
  return render_template("1_items.html", items=items)

@app.route("/purchase")
def purchase():
  purchases = Purchase.query.all()
  return render_template("2_purchases.html", purchases=purchases)

@app.route("/purchase_detail")
def purchase_detail():
  purchase_details = PurchaseDetail.query.all()
  return render_template("3_purchase_details.html", purchase_details=purchase_details)




# 機能

# 商品登録
@app.route("/add_item",methods=["POST"])
def add_item():
  prd_id = request.form["input-item-prd_id"]
  code = request.form["input-item-code"]
  name = request.form["input-item-name"]
  price = request.form["input-item-price"]
  item = Item(prd_id,code, name, price)
  try:
    db.session.add(item)
    db.session.commit()
  except sqlalchemy.exc.IntegrityError:
    return render_template("error.html")    
  return redirect(url_for("item"))

# 購入情報登録
@app.route("/add_purchase",methods=["POST"])
def add_purchase():
  datetime = request.form["input-purchase-datetime"]
  emp_cd = request.form["input-purchase-emp_cd"]
  store_cd = request.form["input-purchase-store_cd"]
  pos_no = request.form["input-purchase-pos_no"]
  total_amt = request.form["input-purchase-total_amt"]
  # change data type
  datetime = pd.to_datetime(datetime)
  purchase = Purchase(datetime,emp_cd,store_cd,pos_no,total_amt)
  try:
    db.session.add(purchase)
    db.session.commit()
  except sqlalchemy.exc.IntegrityError:
    return render_template("error.html")    
  return redirect(url_for('purchase'))

@app.route("/add_purchase_detail",methods=["POST"])
def add_purchase_detail():
  trd_id = request.form["input-purchase_detail-trd_id"]
  prd_id = request.form["input-purchase_detail-prd_id"]
  prd_cd = request.form["input-purchase_detail-prd_cd"]
  prd_name = request.form["input-purchase_detail-prd_name"]
  prd_price = request.form["input-purchase_detail-prd_price"]  
  purchase_detail = PurchaseDetail(trd_id, prd_id, prd_cd, prd_name,prd_price)
  try:
    db.session.add(purchase_detail)
    db.session.commit()
  except sqlalchemy.exc.IntegrityError:
    return render_template("error.html")    
  return redirect(url_for('purchase_detail'))


if __name__=="__main__":
  app.run(debug=True)

