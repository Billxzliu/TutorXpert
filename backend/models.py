from sqlalchemy import Column, Integer, String
from database import Base

class Student(Base):
    __tablename__ = "students"
    id = Column(Integer, primary_key=True, index=True)
    firstName = Column(String)
    lastName = Column(String)
    email = Column(String, unique=True, index=True)
    phone = Column(String)
    address = Column(String)
    password = Column(String)

class Tutor(Base):
    __tablename__ = "tutors"
    id = Column(Integer, primary_key=True, index=True)
    firstName = Column(String)
    lastName = Column(String)
    email = Column(String, unique=True, index=True)
    phone = Column(String)
    address = Column(String)
    password = Column(String)
    educationLevel = Column(String)
    major = Column(String)
    certifications = Column(String)
    childrenCheck = Column(String)
    subjects = Column(String)
    hasExperience = Column(String)
    experienceDetail = Column(String)
    availableTimes = Column(String)
    acceptShortNotice = Column(String)
