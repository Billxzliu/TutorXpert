from database import TutorEngine, Base
from models import Tutor

Base.metadata.create_all(bind=TutorEngine)
