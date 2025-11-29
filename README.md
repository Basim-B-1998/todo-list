# To-Do List with Pagination, Loading, and Task Completion

A dynamic and user-friendly To-Do List application where each task can have tasks. The app includes CRUD operations, pagination, loading indicators and marking tasks as completed,pending or in-progress.


## Features


- **Paginated todo list**
- **Create, read, update, and delete tasks**
- **Mark tasks as Completed, Pending, or In-Progress**
- **Loading indicator**

  

## Tech Stack

- **Frontend:** Next.js,TailwindCSS
- **Backend:** Node.js, Express.js, MongoDB
- **APIs:** Axios for client-server communication
- **Deployment:** Frontend hosted on Vercel, Backend hosted on Render

---

## Installation & Setup

### Backend

1. Navigate to the backend folder
cd server

2. Install dependencies
npm install

3. Set up environment variables
Create a .env file in the server folder and add the following:
MONGO_URL=Your MongoDB connection string,
 PORT=5000

4. Start the backend server
npm run dev

The backend will start in development mode.

### Frontend

1. Navigate to the frontend folder
cd client

2. Install dependencies
npm install

3. Set up environment variables
Create a .env file in the Client folder and add the following:
NEXT_PUBLIC_BACKEND_URI=<Your server Url>

4. Start the frontend
npm run dev

The frontend will start in development mode. Open the provided local URL (usually http://localhost:3000) in your browser to access the app.
