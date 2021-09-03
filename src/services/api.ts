import axios from "axios";

export const fibravilleApi = axios.create({
  baseURL: "https://fibraville.herokuapp.com//api/v1",
});
