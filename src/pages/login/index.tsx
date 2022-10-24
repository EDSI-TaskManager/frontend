import Link from "next/link";
import { useState } from "react";
// import toast from "react-hot-toast";

import { useAuth } from "../../hooks/auth";
import { TextField } from "../../components/";
import { Background } from "../../components/layout";
import { PasswordField } from "../../components/PasswordField";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();

  const handleSubmit = async () => {
    await signIn({ email, password });
  };

  return (
    <Background>
      <div className="block h-screen sm:flex sm:justify-center sm:items-center animate-appearFromLeft">
        <div className="content-wrapper">
          <div className="flex flex-col gap-4">
            <h1 className="text-center text-white text-2xl font-bold mb-10">
              Boas vindas!
            </h1>
            <TextField label="E-MAIL" value={email} setValue={setEmail} />
            <PasswordField password={password} setPassword={setPassword} />
            <a href="" className="text-primary">
              Esqueceu sua senha?
            </a>
            <button
              onClick={handleSubmit}
              className="bg-primary border-none rounded p-2 text-white font-bold"
            >
              Entrar
            </button>
            <div>
              <span className="text-sm font-bold">
                Precisando de uma conta?{" "}
              </span>
              <Link href="/register">Registre-se</Link>
            </div>
          </div>
        </div>
      </div>
    </Background>
  );
};

export default Login;
