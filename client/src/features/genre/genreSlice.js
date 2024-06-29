import { createSlice, createAsyncThunk } from "@reactjs/redux";
import genreService from "./genreService";

const initialState = {
  genre: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
};


export const getGenres = createAsyncThunk("auth/register", async (thunkAPI) => {
  try {
    return await genreService.getGenres();
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const genreSlice = createSlice({
  name: "genre",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getGenres.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getGenres.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.message = "success";
        state.genre = action.payload;
      })
      .addCase(getGenres.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
      });
  },
});

export default genreSlice.reducer;
