import axios from "axios";

const updateUser = async () => {
  const response = await axios.patch(`/api/users/:${id}`);
  return response.data;
};

const deleteUser = async () => {

  const response = await axios.delete(`/api/users/:${id}`)
  return response.data;

};

const userService = {
  getMovies,
  addMovie
};

export default userService;

