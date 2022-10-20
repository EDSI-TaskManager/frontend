import { useState } from "react";
import toast from "react-hot-toast";
import * as yup from "yup";
import { TextField, Background } from "../../components/";

import { login } from "../../services/login";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    const schema = yup.object().shape({
      email: yup.string().required(),
      password: yup.string().required(),
    });

    const valid = await schema.isValid({
      email,
      password,
    });

    if (valid) {
      try {
        const data = await login({ email, password });

        toast(JSON.stringify(data));
      } catch (error: unknown) {
        // toast(error as string);
      }
    }
  };

  return (
    <Background>
      <div className="block h-screen sm:flex sm:justify-center sm:items-center">
        <div className="h-full bg-gray100  flex flex-col justify-center sm:w-[26rem] p-8 sm:rounded-lg sm:h-auto">
          <div className="flex flex-col gap-4">
            <h1 className="text-center text-white text-2xl font-bold mb-10">
              Boas vindas!
            </h1>
            <TextField label="E-MAIL" value={email} setValue={setEmail} />
            <TextField
              label="SENHA"
              type="password"
              value={password}
              setValue={setPassword}
            />
            <a href="" className="text-primary">
              Esqueceu sua senha?
            </a>
            <button
              onClick={handleSubmit}
              className="bg-primary border-none rounded p-2 text-white font-bold"
            >
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
