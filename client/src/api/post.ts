import axiosClient from "./axiosClient";

const postApi = {
  async getAllPost() {
    const url = `post/`;
    const result = await axiosClient.get(url);
    return result;
  },
  async getPostDetai(id: any) {
    const url = `/post/${id}`;
    const result = await axiosClient.get(url, id)
    return result;
  },
  async createPost(post:any) {
    try {
      const url = `/post/new`
      const res = await axiosClient.post(url, post);
      return res;
    } catch (error) {
      console.log("Error: ", error)
    }
  }
}

export default postApi;