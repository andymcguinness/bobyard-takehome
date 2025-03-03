import React, { useState, useEffect } from 'react';
import { getComments } from "./actions";
import { format } from "date-fns";
import './index.css';

export default function App() {
  // TODO: Use Zustand for state management
  const [comments, setComments] = useState([]);

  // Needed as getComments returns a Promise
  useEffect(() => {

    // Fetch comments and update the state
    getComments().then(data => setComments(JSON.parse(data))); // JSON.parse needed to parse the stringified JSON
  }, []);

  return (
    <div className="container mx-auto py-10">

      {/* Comments Header */}
      <h1 className="text-2xl font-bold mb-4">Comments</h1>

      {/* Comments Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {
          // Check  if comments exist and map over them
          comments.length > 0  && comments.map((comment) => (
            <div key={comment.id}
              className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
            >

              {/* Bottom Gradient for the Card */}
              <span
                className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
              ></span>

              
              {/* Image and Author */}
              <div className="sm:flex sm:justify-between sm:gap-4">
                { comment.image && comment.image.length > 0 && 
                  <div className="hidden sm:block sm:shrink-0">
                    <img
                      alt=""
                      src={`${comment.image}`}
                      className="size-16 rounded-lg object-cover shadow-xs"
                    />
                  </div>
                }
                <p className="mt-1 text-xs font-medium text-gray-600">By {comment.author}</p>
              </div>

              {/* Comment Text */}
              <div className="mt-4">
                <p className="text-sm text-pretty text-gray-500">
                  {comment.text}
                </p>
              </div>

              {/* Date and Likes */}
              <dl className="mt-6 flex gap-4 sm:gap-6">
                <div className="flex flex-col-reverse">
                  <dd className="text-xs text-gray-500 mt-1">{format(comment.date, "MM/dd/yyyy")}</dd>
                  <dd className="text-sm font-medium text-gray-900">{comment.likes} Likes</dd>
                </div>
              </dl>
            </div>
          ))
        }
      </div>
    </div>
  )
}