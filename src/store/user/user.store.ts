export const USER_STORE_KEY = "user"

export const UserAction = {
  SET_POLL: "USER/SET_POLL",
  SET_INFO: "USER/SET_INFO"
}

export interface UserState {
  info: {
    [name: string]: string
  },
  poll: {
    [name: string]: boolean
  }
}
