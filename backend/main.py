from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import register

app = FastAPI()

# Enable CORS for frontend interaction
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, restrict this
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include registration routes
app.include_router(register.router, prefix="/register")
app.include_router(register.router)  # ← 添加这行，使得 /download-db 生效

@app.get("/")
def root():
    return {"message": "TutorXpert Backend Running"}
