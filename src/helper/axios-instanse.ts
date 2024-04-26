import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/",
});

export const endPoint = "products?page=1&rows=8&sortBy=id&orderBy=DESC";
