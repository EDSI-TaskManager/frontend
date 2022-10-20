import axios from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

export const setApiToken = (token: string) => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};
