from pydantic import BaseModel, EmailStr

class StudentRegister(BaseModel):
    firstName: str
    lastName: str
    email: EmailStr
    phone: str
    address: str
    password: str

class TutorRegister(StudentRegister):
    educationLevel: str
    major: str
    certifications: str
    childrenCheck: str
    subjects: str
    hasExperience: str
    experienceDetail: str
    availableTimes: str
    acceptShortNotice: str
