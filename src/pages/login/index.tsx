import Link from "next/link";
import { KeyboardEvent, useState } from "react";
// import toast from "react-hot-toast";

import { useAuth } from "../../hooks/auth";
import { TextField } from "../../components/";
import { Background } from "../../components/layout";
import { PasswordField } from "../../components/PasswordField";
import { AxiosError } from "axios";
import { getAPIClient } from "../../services/api";
import { GetServerSideProps } from "next";
import { AuthController } from "../../controllers/AuthController";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);

  const [errorMessage, setErrorMessage] = useState("");

  const { signIn } = useAuth();

  const handleSubmit = async () => {
    if (email === "") {
      setErrorMessage("");
      setEmailError("Campo obrigatório");
      return;
    } else setEmailError(null);

    if (password === "") {
      setErrorMessage("");
      setPasswordError("Campo obrigatório");
      return;
    } else setPasswordError(null);

    try {
      await signIn({ email, password });
    } catch (err) {
      const error = err as AxiosError<{
        statusCode: number;
        message: string;
        error: string;
      }>;
      console.log(
        JSON.stringify(error.response?.data.message || "Tente novamente")
      );
      setErrorMessage(error.response?.data.message || "");
    }
  };

  const handleKeydown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter") handleSubmit();
  };

  return (
    <Background>
      <div
        className="block h-screen sm:flex sm:justify-center sm:items-center animate-appearFromLeft"
        onKeyDown={handleKeydown}
      >
        <div className="content-wrapper">
          <div className="flex flex-col gap-4">
            <h1 className="text-center text-white text-2xl font-bold mb-10">
              Boas vindas!
            </h1>
            {errorMessage && (
              <div className="bg-red/20 rounded p-2 text-red">
                {errorMessage}
              </div>
            )}
            <TextField
              label="E-MAIL"
              value={email}
              setValue={setEmail}
              errorLabel={emailError}
            />
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

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const api = getAPIClient(ctx);
  const authController = new AuthController(api);

  try {
    const response = await authController.currentUser();

    if (response.role === "Manager") {
      return {
        redirect: {
          destination: "/dashboard/manager",
          permanent: false,
        },
      };
    }
    return {
      redirect: {
        destination: "/dashboard/employee",
        permanent: false,
      },
    };
  } catch (error) {
    return { props: {} };
  }
};

export default Login;
