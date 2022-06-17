import StorageKeys from "constants/storage-keys";
import axiosClient from "./axiosClient";

const authApi = {
    register(user: any) {
        const url = 'register';
        return axiosClient.post(url, user);
    },
    login(data: any) {
        const url = 'login';
        return axiosClient.post(url, data)
            .then((response) => {
                if (response.data.result.token) {
                  localStorage.setItem(StorageKeys.user, JSON.stringify(response.data.result.user));
                  localStorage.setItem(StorageKeys.access, JSON.stringify(response.data.result.token));
                }
                return response.data.result;
              });;
    },
    logout() {
        localStorage.removeItem(StorageKeys.user);
        localStorage.removeItem(StorageKeys.access);
        localStorage.clear();
    },
}

export default authApi