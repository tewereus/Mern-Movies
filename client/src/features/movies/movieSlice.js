import { createSlice, createAsyncThunk } from "@reactjs/redux";
import movieService from "./movieService";

const initialState = {
  movies: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
};

export const addMovie = createAsyncThunk(
  "auth/login",
  async (data, thunkAPI) => {
    try {
      return await movieService.addMovie(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getMovies = createAsyncThunk("auth/register", async (thunkAPI) => {
  try {
    return await movieService.getMovies();
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addMovie.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addMovie.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.message = "success";
        state.user = action.payload;
      })
      .addCase(addMovie.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
      })
      .addCase(getMovies.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMovies.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.message = "success";
        state.movies = action.payload;
      })
      .addCase(getMovies.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
      });
  },
});

export default movieSlice.reducer;
