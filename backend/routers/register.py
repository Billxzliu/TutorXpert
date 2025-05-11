from fastapi import APIRouter, Depends, HTTPException
from fastapi.responses import FileResponse
from sqlalchemy.orm import Session
from database import SessionLocal
from models import Student, Tutor
from schemas import StudentRegister, TutorRegister
import os

router = APIRouter()

# Dependency to get DB session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/student")
def register_student(data: StudentRegister, db: Session = Depends(get_db)):
    if db.query(Student).filter(Student.email == data.email).first():
        raise HTTPException(status_code=400, detail="Email already registered")
    student = Student(**data.dict())
    db.add(student)
    db.commit()
    db.refresh(student)
    return {"message": "Student registered successfully", "id": student.id}

@router.post("/tutor")
def register_tutor(data: TutorRegister, db: Session = Depends(get_db)):
    if db.query(Tutor).filter(Tutor.email == data.email).first():
        raise HTTPException(status_code=400, detail="Email already registered")
    tutor = Tutor(**data.dict())
    db.add(tutor)
    db.commit()
    db.refresh(tutor)
    return {"message": "Tutor registered successfully", "id": tutor.id}

# ✅ Add download-db endpoint
@router.get("/download-db")
def download_db():
    db_path = os.path.abspath("tutors.db")
    if os.path.exists(db_path):
        return FileResponse(
            db_path,
            filename="tutors.db",
            media_type="application/octet-stream"
        )
    raise HTTPException(status_code=404, detail="Database file not found.")
