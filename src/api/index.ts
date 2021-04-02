import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

export function registerRequest(data: object) {
  return instance.post("/user/register/", data)
}
export function postExperimentRequest(data: object) {
  return instance.post("/user/experiment/", data)
}
export function serverLogRequest(data: string) {
  console.log(data);
  return instance.post("/log/", data)
}
