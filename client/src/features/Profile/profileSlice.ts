import { CurrentUser, ProfileState } from './../../types/profile.type';
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import profileApi from "api/profile";
import { RootState } from '../../app/store';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import StorageKeys from 'constants/storage-keys';

export const getProfile = createAsyncThunk(
  "profile/getProfile",
  async (data: any, thunkAPI) => {
    try {
      const response = await profileApi.getProfile(data);

      return { user: response.data.result };
    } catch (error) {

      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const editProfile = createAsyncThunk(
  "profile/editProfile",
  async (data: any, thunkAPI) => {
    try {
      const response = await profileApi.editProfile(JSON.parse(localStorage.getItem(StorageKeys.user) ?? '{}').id, data);
      return { result: response?.data.result};

    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState: ProfileState = {
  user: JSON.parse(localStorage.getItem(StorageKeys.user) ?? '{}'),
  isLoading: false,
  error: "",
  message: ""
}

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProfile.pending, (state, action) => {
        state.isLoading = true
      })
      .addCase(getProfile.fulfilled, (state, action) => {
        state.user = action.payload.user
      })
      .addCase(getProfile.rejected, (state, action) => {
        state.error = 'not found!!!'
        state.user = undefined
      })
      .addCase(editProfile.pending, (state, action) => {
        state.isLoading = true
      })
      .addCase(editProfile.fulfilled, (state, action) => {
        state.user = action.payload.result;
        state.message = 'edit success!'
      })
      .addCase(editProfile.rejected, (state, action) => {
        state.error = 'not found!!!'
        state.user = undefined
      })
  },
});

export const profileSelector = (state: RootState) => state.profile

export const profileReducer = profileSlice.reducer;