import { combineReducers } from "redux";
import authReducer from "../features/auth/authSlice";
import movieReducer from "../features/movies/movieSlice";
import genreReducer from "../features/genre/genreSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    movie: movieReducer,
    genre: genreReducer,
  },
});