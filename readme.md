# Image Feed App (MERN)

A full-stack MERN application for creating and sharing image posts in a community feed. Users upload an image with a caption, and it's stored in the cloud and displayed in a shared feed.


## Features

- 🖼️ Upload images with a caption to create a post
- 📰 Browse a community feed of all shared images
- ☁️ Images uploaded to cloud storage via a dedicated storage service
- ⚡ Built with React Router (frontend) and Express + Multer (backend)

## Tech Stack

**Frontend**
- React
- React Router DOM

**Backend**
- Node.js
- Express.js
- Multer (in-memory file handling for uploads)
- MongoDB (Mongoose) — `postModel` with `Image` and `Caption` fields
- CORS
- 🔧 Cloud storage provider used in `services/storage.service.js` (ImageKit)

## Routes

### Frontend

| Path          | Component     | Description                    |
|---------------|---------------|---------------------------------|
| `/create-post`| `Createpost`  | Create and submit a new image post |
| `/feed`       | `Feed`        | View all shared image posts    |

### Backend API

| Method | Endpoint       | Description                                      |
|--------|----------------|---------------------------------------------------|
| POST   | `/create-post` | Uploads an image (form field key: `Image`) with a `Caption`, stores it via the storage service, and saves the post |
| GET    | `/posts`       | Fetches all posts                                 |

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- MongoDB (local or Atlas)

### Installation

1. Clone the repository
   ```bash
   git clone <your-repo-url>
   cd <project-folder>
   ```

2. Install backend dependencies
   ```bash
   cd backend
   npm install
   ```

3. Install frontend dependencies
   ```bash
   cd ../
   npm install
   ```

4. Set up environment variables

   Create a `.env` file in the `server` directory:
   ```
   MONGODB_URI=your_mongodb_connection_string
   PORT=3000
   ```

### Running the App

Start the backend:
```bash
cd backend
npx nodemon server.js

```
Start the frontend:

cd Frontend/vite-latest
npm run dev




The app should now be running at `http://localhost:3000` (frontend) and `http://localhost:5173`

