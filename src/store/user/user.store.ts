import {StageResult} from "../../models/Test.model";

export const USER_STORE_KEY = "user"

export const UserAction = {
  SET_POLL: "USER/SET_POLL",
  SET_INFO: "USER/SET_INFO",
  SET_TEST: "USER/SET_TEST",
  SET_TABLE_INDEX: "USER/SET_TABLE_INDEX",
  SET_USER_ID: "USER/SET_USER_ID"
}

export interface UserState {
  id?: number
  info: {
    [name: string]: string
  },
  poll: {
    [name: string]: boolean
  },
  test: {
    [stage: string]: StageResult
  }
  table: {
    tableIndex: number,
    taskIndex: number
  }
}
