import axios from "axios";

const UserApi = axios.create({
  baseURL: "https://api.github.com/",
});

export default UserApi;
