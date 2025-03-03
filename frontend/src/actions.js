"use server";

// Server action to get comments from database
export async function getComments() {

  // Wrap in a try-catch block for error handling
  try {
    
    // Fetch comments from the API
    const response = await fetch('http://localhost:8000/comments/');

    // Check if the response is ok
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Parse the response as JSON
    const data = await response.json();

    // Return the parsed comments
    return data;

  } catch (error) {

    // Log the error and return an empty array
    console.error("Fetching error:", error);
  }
}