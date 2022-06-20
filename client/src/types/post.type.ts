import { CurrentUser } from "./profile.type";

export interface Post {
  id: number,
  userId: number,
  title: string,
  content: string,
  imageCover: string,
  createAt: Date,
  updateAt: Date,
  user?: CurrentUser,
  totalRate: number,
  countCmt: number
}

export interface PostCreate {
  id: number,
  userId: number,
  title: string,
  content: string,
  imageCover: string,
  createAt: Date,
}

export interface PostState {
  isLoading: boolean,
  error: string,
  message: string,
  postList?: Post[],
  postDetail?: Post
}
