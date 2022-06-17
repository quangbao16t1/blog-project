import StorageKeys from "../constants/storage-keys";
import axiosClient from "./axiosClient";

const userApi = {

    async getUser(params: any) {
        const newParams = { ...params }
        const accessToken = localStorage.getItem(StorageKeys.access)
        const url = `users/`;
        const response = await axiosClient.get(url, {
            params: { ...newParams },
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });
        return response
    },
}

export default userApi