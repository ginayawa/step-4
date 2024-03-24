from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
import PosApp.backend.db_ctl.config as config 

# SQLALCHEMY_DATABASE_URL = 'sqlite:///./CRM.db'

# engine = create_engine(
#   SQLALCHEMY_DATABASE_URL,
#   connect_args={'check_same_thread':False}
# )

user = config.DB_USER
password = config.PASSWORD
host = config.HOST
db_name = config.DATABASE

engine = create_engine(f'mysql+mysqlconnector://{user}:{password}@{host}/{db_name}')


SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()