import Router from "next/router";
import { setCookie } from "nookies";
import { createContext, ReactNode, useContext, useState } from "react";

import { IUser } from "../../interfaces";
import { login } from "../../controllers/login";
import { api } from "../../services/api";

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

export const AuthContext = createContext({} as AuthContextType);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: PropsType) => {
  const [user, setUser] = useState<IUser | null>(null);

  const isAuthenticated = !!user;

  async function signIn({ email, password }: SignInData) {
    const { token, user: _user } = await login(email, password);

    setCookie(undefined, "task_manager.token", token, {
      maxAge: 60 * 60 * 1, // 1 hour
    });

    api.defaults.headers["Authorization"] = "Bearer " + token;

    console.log(JSON.stringify(_user));
    setUser(_user);

    if (_user.role === "Manager") {
      Router.push("/dashboard/manager");
    } else {
      Router.push("/dashboard/employee");
    }
  }

  return (
    <AuthContext.Provider value={{ user, signIn, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};
