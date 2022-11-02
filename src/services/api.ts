import axios from "axios";
import { parseCookies } from "nookies";

export const getAPIClient = (ctx?: any) => {
  const { "task_manager.token": token } = parseCookies(ctx);

  const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  });

  if (token) {
    api.defaults.headers["Authorization"] = `Bearer ${token}`;
  }

  return api;
};

export const api = getAPIClient();
