from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session
from fastapi.middleware.cors import CORSMiddleware

from db_ctl import crud, schemas, models
from db_ctl.database import SessionLocal, engine


models.Base.metadata.create_all(bind=engine)

app = FastAPI()

# CORS回避
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


def get_db():
  db = SessionLocal()
  try:
    yield db
  finally:
    db.close()

@app.get('/')
def index():
  return {'message':'Success'}


@app.post('/item', response_model=schemas.Item)
async def create_item(item: schemas.createItem, db: Session = Depends(get_db)):
  return crud.create_item(db=db,item=item)

@app.get('/items/{prd_cd}')
async def search_item(prd_cd: str, db: Session = Depends(get_db)):
  item = crud.get_item(db, prd_cd)
  return item


@app.get('/items')
async def read_items(db: Session = Depends(get_db)):
  items = crud.get_items(db)
  return items






@app.post('/purchase/')
async def purchase(purchase: schemas.Purchase, db: Session = Depends(get_db)):
  return crud.create_tran_and_detail(db=db,purchase=purchase)



@app.post('/member', response_model=schemas.Member)
async def create_member(member: schemas.createMember, db: Session = Depends(get_db)):
  return crud.create_member(db=db,member=member)

@app.get('/trans/{mbr_id}')
async def read_trans(mbr_id: int ,db: Session = Depends(get_db)):
  trans = crud.get_trans(db, mbr_id)
  return trans




# uvicorn db_ctl.main:app --reload