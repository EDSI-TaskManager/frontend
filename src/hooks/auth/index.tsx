import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface Props {
  children: ReactNode;
}

interface IAuthContextData {
  token: string;
  setToken: Dispatch<SetStateAction<string>>;
}

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

export const useAuth = () => useContext(AuthContext);

export const Auth = ({ children }: Props) => {
  const [token, setToken] = useState("");

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};
