import { IUser } from "../interfaces";
import { api } from "../services/api";

type ResponseType = {
  user: IUser;
  token: string;
};

type FunctionType = (email: string, password: string) => Promise<ResponseType>;

export const login: FunctionType = async (email: string, password: string) => {
  const response = await api.post("/auth/login", { email, password });

  return response.data;
};
