import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk, RootState } from '../../app/store';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const getPost = createAsyncThunk(
  'post/getPost',
  async (data: any, thunkAPI) => {
    try {

    } catch (error) {

    }
  }
)

const initialState = {
  isLoading: false,
  error: "",
  message: ""
}

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPost.pending, (state, action) => {
        
      })
  },
});

export const postSelector = (state: RootState) => state.post

export const postReducer = postSlice.reducer;