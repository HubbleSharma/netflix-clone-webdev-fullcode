# Netflix Clone Backend

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Set up your MongoDB connection string in `.env`:
   ```env
   MONGODB_URI=mongodb://localhost:27017/netflix_clone
   ```
3. Start the server:
   ```bash
   node index.js
   ```

## API Endpoints

- `GET /api/movies/trending` - Fetch trending movies

## Project Structure
- `models/` - Mongoose models
- `controllers/` - Route controllers
- `routes/` - Express routes

## Features
- Trending movies API
- Modular structure
- MongoDB with Mongoose 