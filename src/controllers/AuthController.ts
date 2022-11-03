import { AxiosInstance } from "axios";
import { IUser } from "../interfaces";

export class AuthController {
  protected endpoint!: string;

  constructor(private api: AxiosInstance) {}

  async login(email: string, password: string) {
    const response = await this.api.post<{
      user: IUser;
      token: string;
    }>("/auth/login", { email, password });

    return response.data;
  }

  async currentUser() {
    const response = await this.api.get<IUser>("/auth/current-user");

    return response.data;
  }
}
