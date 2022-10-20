import { IUser } from "../interfaces";
import { ApiService } from "../services/api";

interface Body {
  email: string;
  password: string;
}

type FunctionType = (body: Body) => Promise<{ user: IUser; token: string }>;

export const login: FunctionType = async (body: Body) => {
  const response = await ApiService.api.post("/auth/login", body);

  return response.data;
};
