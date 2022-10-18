import { api } from "./api";

interface Body {
  email: string;
  password: string;
}

export async function login(body: Body) {
  const { data } = await api.post("", body);

  return data;
}
