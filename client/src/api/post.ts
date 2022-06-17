import axiosClient from "./axiosClient";

const postApi = {
  async getAllPost(params: any) {
    const url = `post/`;
    const result = await axiosClient.get(url, params);
    return result;
  },
}

export default postApi;