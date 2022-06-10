import StorageKeys from "constants/storage-keys"

export interface AuthState {
    isAuth: boolean
    currentUser?: CurrentUser
    isLoading: boolean
    error: string
}

export interface CurrentUser {
    id: number
    firstName: string
    lastName: string
    email: string
    gender: string
    address: string
    phoneNumber: string 
    roleId: number
}

export const initialState: AuthState = {
    isAuth: false,
    currentUser: JSON.parse(localStorage.getItem(StorageKeys.user) ?? '{}'),
    isLoading: false,
    error: "",
}
