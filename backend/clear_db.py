from database import TutorEngine, StudentEngine, TutorSessionLocal, StudentSessionLocal
from models import Tutor, Student

def clear_all():
    tutor_db = TutorSessionLocal()
    student_db = StudentSessionLocal()

    tutor_db.query(Tutor).delete()
    student_db.query(Student).delete()

    tutor_db.commit()
    student_db.commit()

    tutor_db.close()
    student_db.close()

if __name__ == "__main__":
    clear_all()
