import Link from "next/link";
import { useState } from "react";
import { TextField } from "../../components";
import { Background } from "../../components/layout";
import { PasswordField } from "../../components/PasswordField";

const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Background>
      <div className="block h-screen sm:flex sm:justify-center sm:items-center animate-appearFromLeft">
        <div className="h-full bg-gray-100 flex flex-col gap-4 justify-center sm:w-[26rem] p-8 sm:rounded-lg sm:h-auto">
          <p className="text-center text-white text-2xl font-bold ">
            Criar uma conta
          </p>
          <TextField label="E-MAIL" value={email} setValue={setEmail} />
          <TextField
            label="NOME DE USUÁRIO"
            value={username}
            setValue={setUsername}
          />
          <PasswordField password={password} setPassword={setPassword} />
          <button className="button" onClick={handleSubmit}>
            Continuar
          </button>
          <Link href="/login">Já tem uma conta?</Link>
          <p className="text-xs">
            Ao se registrar você concorda com os{" "}
            <Link href="/terms">termos de serviço</Link> e a{" "}
            <Link href="/privacy">política de privacidade</Link>
          </p>
        </div>
      </div>
    </Background>
  );
};

export default Register;
