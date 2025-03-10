# Basic React, TypeScript, TailwindCSS, Python, FastAPI, Supabase Project

I have built out a basic API using FastAPI with React layered over it to provide a modern frontend.

The frontend is basic React using no framework at all. Normally I use Next.js, but felt like challenging myself to use vanilla React in this instance.

The styling is done with TailwindCSS. I am using elements from the HyperUI library for Tailwind.

## Supabase Database Setup

You will have to create your own Supabase account and database to run this project.

You will need to create a .env file in the root directory of this project with the following variables:

```
SUPABASE_URL=
SUPABASE_KEY=
```

## Running the Project

To run the project, clone the project locally and create the .env file discussed above.

Then, run the following commands in the backend directory:

```
pip install -r requirements.txt
uvicorn main:app --reload
```

Open a new Terminal window and run the following commands in the frontend directory:

```
npm install
npm run start
```

## Navigating What I've Done

I've created a functional backend and a template frontend.

The backend is functional and can do basic CRUD operations -- this can be tested with Postman.

The frontend displays the comments in a grid, styled as a card.
