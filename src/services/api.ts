import axios from "axios";

let storedToken = "";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

export const apiWithToken = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    Authorization: `Bearer ${storedToken}`,
  },
});

export const setApiToken = (token: string) => {
  storedToken = token;
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

export const getApi = () => (storedToken ? apiWithToken : api);
