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
export interface ProfileState {
  user?: CurrentUser
  isLoading: boolean
  error: string
  message: string
}
