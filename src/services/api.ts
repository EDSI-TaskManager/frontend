import axios, { AxiosInstance } from "axios";

export class ApiService {
  private static _instance = new ApiService();
  private token = "";
  private static _api: AxiosInstance;

  private constructor() {
    ApiService._api = axios.create({
      baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    });
  }

  static get instance() {
    if (!ApiService.instance) {
      ApiService._instance = new ApiService();
    }

    return this._instance;
  }

  static get api() {
    return this._api;
  }

  static set token(token: string) {
    this.token = token;
    ApiService._api = axios.create({
      baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  }
}
