import { useNavigate } from 'react-router-dom';
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import authApi from "api/auth";
import { AuthState, CurrentUser, initialState } from 'types/auth.type'
import { AppThunk, RootState } from '../../app/store';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



export const register = createAsyncThunk(
    "auth/register",
    async (data: any, thunkAPI) => {
        try {
            const response = await authApi.register(data);
            toast("Register successfully!!!");
            return { result: response.data };
        } catch (error) {
            toast("cant register")
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const login = createAsyncThunk(
    "auth/login",
    async (data: any, thunkAPI) => {
        try {
            const result = await authApi.login(data);
            toast('Login successfully!!!')
            return { result: result.user };
        } catch (error) {
            toast.warning('Email or Password not correct!!!')
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const logout = createAsyncThunk("auth/logout", async () => {
    await authApi.logout();
    toast('Logout successfully!!!')
});

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state, action) => {
                state.isAuth = false
            })
            .addCase(login.fulfilled, (state, action) => {
                // const {currenUser, isLoading, isAuth} = action.payload;
                Object.assign(state, {
                    currentUser: action.payload.result,
                    isAuth: true,
                    isLoading: false
                }
                )
            })
            .addCase(login.rejected, (state, action) => {
                state.error = "Cant login"
                state.isAuth = false
            })
            .addCase(register.fulfilled, (state, action) => {
                state.isLoading = false
            })
            .addCase(register.rejected, (state, action) => {
                state.error = "Email does not exits!!"
            })
            .addCase(logout.fulfilled, (state, action) => {
                state.isLoading = false
                state.currentUser = undefined;
            })
    },
});

export const authSelector = (state: RootState) => state.auth

export const authReducer = authSlice.reducer;