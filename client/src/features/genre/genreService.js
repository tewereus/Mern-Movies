import axios from "axios";

const getGenres = async (data) => {
  const response = await axios.get("/api/genres");
  return response.data;
};

const genreService = {
getGenres
};

export default genreService;
