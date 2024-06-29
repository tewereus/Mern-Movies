## MERN Movies

A web application built using the MERN stack (MongoDB, Express.js, React, Node.js) to manage a collection of movies.

### Features

- Browse and search for movies
- View detailed information about each movie
- Add new movies to the collection
- Update existing movie details
- Delete movies from the collection
- User registration and login
- Authentication using JWT Tokens
- Add Favorites
- Delete Favorites
- Leave Reviews
- Delete Reviews
- Password Update
- Search Live

### Technologies Used

- **axios**: For making API calls
- **React Redux**: Manage application state efficiently and provide a more structured mechanism for managing data
- **Node.js**: A runtime environment to help build fast server applications using JavaScript
- **Express.js**: The server for handling and routing HTTP requests
- **Mongoose**: For modeling and mapping MongoDB data to JavaScript
- **jsonwebtoken**: For authentication
- **cookie-parser**: Middleware module used in Node.js web applications to manage cookies
- **cors**: Provides a Connect/Express middleware
- **dotenv**: Zero Dependency module that loads environment variables
- **nodemon**: Development utility for Node.js applications
- **MongoDB**: Document-based database for storing movie data

### Getting Started

1. Clone the repository:
   ```
   git clone https://github.com/tewereus/Mern-Movies.git
   ```
2. Install dependencies:
   ```
   cd Mern-Movies
   npm install
   ```
3. Set up the environment variables:
   - Create a `.env` file in the root directory
   - Add the necessary environment variables, such as the MongoDB connection string, TMDB API key, and JWT secret
4. Start the development server:
   ```
   npm start
   ```
5. Open the application in your browser at `http://localhost:3000`
