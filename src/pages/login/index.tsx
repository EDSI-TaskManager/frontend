import { useState } from "react";
import { TextField, Background } from "../../components/";

const Login = () => {
  const [emailOrUsername, setEmailOrUsername] = useState("");
  const [passoword, setPassoword] = useState("");

  return (
    <Background>
      <div className="block h-screen sm:flex sm:justify-center sm:items-center">
        <div className="h-full bg-gray100  flex flex-col justify-center sm:w-[26rem] p-8 sm:rounded-lg sm:h-auto">
          <div className="flex flex-col gap-4">
            <h1 className="text-center text-white text-2xl font-bold mb-10">
              Boas vindas!
            </h1>
            <TextField
              label="E-MAIL OU NOME DE USUÁRIO"
              value={emailOrUsername}
              setValue={setEmailOrUsername}
            />
            <TextField
              label="SENHA"
              value={passoword}
              setValue={setPassoword}
            />
            <a href="" className="text-primary">
              Esqueceu sua senha?
            </a>
            <button className="bg-primary border-none rounded p-2 text-white font-bold">
              Entar
            </button>
            <div>
              <span className="text-sm font-bold">
                Precisando de uma conta?{" "}
              </span>
              <a href="" className="text-sm font-bold text-primary">
                Registre-se
              </a>
            </div>
          </div>
        </div>
      </div>
    </Background>
  );
};

export default Login;
