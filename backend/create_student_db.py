# create_student_db.py
from database import StudentEngine, Base
from models import Student

Base.metadata.create_all(bind=StudentEngine)
