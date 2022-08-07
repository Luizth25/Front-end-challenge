import axios from "axios";

export const CommitsApi = axios.create({
  baseURL: "https://api.github.com/repos",
});

export const ReposApi = axios.create({
  baseURL: "https://api.github.com/users",
});

export const UserApi = axios.create({
  baseURL: "https://api.github.com",
});
