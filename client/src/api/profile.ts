import axiosClient from "./axiosClient";

const profileApi = {
  async getProfile(id: any) {
    const url = `/users/${id}`;
    return await axiosClient.get(url, id)
  },
  async editProfile(id: any, data: any) {
    try {
      const url = `/users/${id}`;
      return await axiosClient.put(url, data)
    } catch (error: any) {
      console.log(error.message)
    }
  },
}

export default profileApi;