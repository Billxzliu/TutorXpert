from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from database import StudentSessionLocal, TutorSessionLocal
from models import Student, Tutor
from schemas import StudentRegister, TutorRegister

router = APIRouter()

def get_student_db():
    db = StudentSessionLocal()
    try:
        yield db
    finally:
        db.close()

def get_tutor_db():
    db = TutorSessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/student")
def register_student(data: StudentRegister, db: Session = Depends(get_student_db)):
    if db.query(Student).filter(Student.email == data.email).first():
        raise HTTPException(status_code=400, detail="Email already registered")
    student = Student(**data.dict())
    db.add(student)
    db.commit()
    db.refresh(student)
    return {"message": "Student registered successfully", "id": student.id}

@router.post("/tutor")
def register_tutor(data: TutorRegister, db: Session = Depends(get_tutor_db)):
    if db.query(Tutor).filter(Tutor.email == data.email).first():
        raise HTTPException(status_code=400, detail="Email already registered")
    tutor = Tutor(**data.dict())
    db.add(tutor)
    db.commit()
    db.refresh(tutor)
    return {"message": "Tutor registered successfully", "id": tutor.id}
