import { Post } from 'types/post.type';
import { PostState } from './../../types/post.type';
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk, RootState } from '../../app/store';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import postApi from "api/post";

export const getPost = createAsyncThunk(
  'post/getPost',
  async () => {
    try {
      const response = await postApi.getAllPost();
      return {result: response.data.Posts}
    } catch (error) {
      console.log(error);
    }
  }
)

export const getPostId = createAsyncThunk(
  'post/getPostId',
  async (id: any, thunkAPI) => {
    try {
      const result = await postApi.getPostDetai(id);
      console.log('resultt', result.data);
      return {result: result.data.Post}
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
)

export const createPost = createAsyncThunk(
  'post/createPost',
  async (data: any, thunkAPI) => {
    try {
      const res = await postApi.createPost(data);
      return {result: res?.data}
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
)

const initialState: PostState = {
  isLoading: false,
  error: "",
  message: "",
}

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPost.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getPost.fulfilled, (state, action) => {
        Object.assign(state, {
          message: 'Successfully!!!',
          postList: action.payload?.result
        })
      })
      .addCase(getPost.rejected, (state, action) => {
        state.message = "Can't get list posts!!!"
      })
      .addCase(getPostId.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getPostId.fulfilled, (state, action) => {
          state.message =  'Successfully!!!';
          state.postDetail =  action.payload?.result
      })
      .addCase(getPostId.rejected, (state, action) => {
        state.message = "Not found!!!"
      })
  },
});

export const postSelector = (state: RootState) => state.post

export const postReducer = postSlice.reducer;