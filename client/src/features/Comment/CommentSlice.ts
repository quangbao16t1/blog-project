import { Comment } from 'antd';
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk, RootState } from '../../app/store';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const getComment = createAsyncThunk(
  'comment/getComment',
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

const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getComment.pending, (state, action) => {
        
      })
  },
});

export const commentSelector = (state: RootState) => state.comment

export const commentReducer = commentSlice.reducer;