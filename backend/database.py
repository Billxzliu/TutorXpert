# database.py
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base

# 分别指定两个数据库 URL
STUDENT_DATABASE_URL = "sqlite:///./student.db"
TUTOR_DATABASE_URL = "sqlite:///./tutor.db"

# 两个 Engine 和 Session
StudentEngine = create_engine(STUDENT_DATABASE_URL, connect_args={"check_same_thread": False})
TutorEngine = create_engine(TUTOR_DATABASE_URL, connect_args={"check_same_thread": False})

StudentSessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=StudentEngine)
TutorSessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=TutorEngine)

Base = declarative_base()

