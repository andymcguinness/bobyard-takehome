from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from modules import comments

# Set up FastAPI
app = FastAPI()
app.include_router(comments.router)

#Set up CORS
origins = [
    "http://localhost:3000",
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Basic "Hello, world!" endpoint
@app.get("/")
async def root():
    return {"message": "Hello, world!"}