import Router from "next/router";
import { setCookie } from "nookies";
import { createContext, ReactNode, useContext, useState } from "react";

import { IUser } from "../../interfaces";
import { login } from "../../controllers/login";

type PropsType = {
  children: ReactNode;
};

type SignInData = {
  email: string;
  password: string;
};

type AuthContextType = {
  isAuthenticated: boolean;
  user: IUser | null;
  signIn: (data: SignInData) => Promise<void>;
};

const AuthContext = createContext({} as AuthContextType);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: PropsType) => {
  const [user, setUser] = useState<IUser | null>(null);

  const isAuthenticated = !!user;

  async function signIn({ email, password }: SignInData) {
    const { token, user } = await login(email, password);

    setCookie(undefined, "task_manager.token", token, {
      maxAge: 60 * 60 * 1, // 1 hour
    });

    setUser(user);

    Router.push("/manager");
  }

  return (
    <AuthContext.Provider value={{ user, signIn, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};
