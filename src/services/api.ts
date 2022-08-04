import axios from "axios";

export const UserApi = axios.create({
  baseURL: "https://api.github.com",
});

export const ReposApi = axios.create({
  baseURL: "https://api.github.com/users",
});

export const CommitsApi = axios.create({
  baseURL: "https://api.github.com/repos",
});
