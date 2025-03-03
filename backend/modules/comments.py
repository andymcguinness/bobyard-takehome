# modules/comments.py
import os
from dotenv import load_dotenv, find_dotenv
from supabase import create_client, Client
from fastapi import APIRouter
import json

# Get .env vars
dotenv_path = find_dotenv()
load_dotenv(dotenv_path)

# Set up Supabase connection
url: str = os.getenv("SUPABASE_URL")
key: str = os.getenv("SUPABASE_KEY")
supabase: Client = create_client(url, key)

# Comments routes specifically
router = APIRouter(prefix="/comments", tags=["comments"])

# Basic route to read all comments
@router.get("/")
async def read_comments():

    # Get all comments from Supabase
    response = (
        supabase.table("comments")
        .select("*")
        .execute()
    )
    
    # Return all the comments as JSON
    return json.dumps(response.data)

# Route to insert a comment
@router.post("/")
async def insert_comment(comment: dict):
    
    # Insert a comment to Supabase
    response = (
        supabase.table("comments")
        .insert(comment)
        .execute()
    )

    # Return the inserted comment as JSON
    return json.dumps(response.data)

# Route to update a comment
@router.put("/{comment_id}")
async def update_comment(comment: dict):

    # Update a comment in Supabase
    response = (
        supabase.table("comments")
        .update(comment)
        .eq("id", comment["id"])
        .execute()
    )

    # Return the updated comment as JSON
    return json.dumps(response.data)

# Route to delete a comment
@router.delete("/{comment_id}")
async def delete_comment(comment_id: int):

    # Delete a comment from Supabase
    response = (
        supabase.table("comments")
        .delete()
        .eq("id", comment_id)
        .execute()
    )

    # Return the deleted comment as JSON
    return json.dumps(response.data)