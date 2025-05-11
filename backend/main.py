from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import register, download  # ← 引入 download 模块

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(register.router, prefix="/register")
app.include_router(download.router)  # ← 添加这个路由

@app.get("/")
def root():
    return {"message": "TutorXpert Backend Running"}
