import axios from "axios";

const getMovies = async () => {
  const response = await axios.get("/api/movies");
  return response.data;
};

const addMovie = async (data) => {

  const response = await axios.post("/api/movies/addmovie", data)
  return response.data;

};

const movieService = {
  getMovies,
  addMovie
};

export default movieService;
