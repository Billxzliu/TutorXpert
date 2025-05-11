from fastapi import APIRouter
from fastapi.responses import FileResponse
import os

router = APIRouter()

@router.get("/download/student-db")
def download_student_db():
    db_path = os.path.abspath("student.db")
    if not os.path.exists(db_path):
        return {"error": "student.db not found"}
    return FileResponse(db_path, media_type='application/octet-stream', filename="student.db")

@router.get("/download/tutor-db")
def download_tutor_db():
    db_path = os.path.abspath("tutor.db")
    if not os.path.exists(db_path):
        return {"error": "tutor.db not found"}
    return FileResponse(db_path, media_type='application/octet-stream', filename="tutor.db")
