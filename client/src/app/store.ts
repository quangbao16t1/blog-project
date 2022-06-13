import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import {authReducer} from 'features/Auth/authSlice';
import { commentReducer } from 'features/Comment/CommentSlice';
import { profileReducer } from 'features/Profile/profileSlice';
import logger from 'redux-logger';


export const store = configureStore({
  reducer: {
    auth: authReducer,
    profile: profileReducer,
    comment: commentReducer

  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;