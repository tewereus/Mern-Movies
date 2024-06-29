import { createBrowserRouter, RouterProvider, redirect } from "react-router-dom";

import Movies from "./pages/Movies";
import AddMovieForm from "./pages/AddMovie";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
// import MovieForm from './components/movieForm';

import "./App.css";

const router = createBrowserRouter([  
      { index: true, element: <Movies /> },
      { path: "/movies/new", element: <AddMovieForm /> },
      { path: "/register", element: <Register /> },
      { path: "/login", element: <Login /> },
]);

function App() {
  return <RouterProvider router={router} />;
}
