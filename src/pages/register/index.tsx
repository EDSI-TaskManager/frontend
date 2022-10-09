import { Background, TextField } from "../../components";

const Register = () => {
  return (
    <Background>
      <div className="block h-screen sm:flex sm:justify-center sm:items-center">
        <div className="h-full bg-gray100 flex flex-col gap-4 justify-center sm:w-[26rem] p-8 sm:rounded-lg sm:h-auto">
          <p className="text-center text-white text-2xl font-bold ">
            Criar uma conta
          </p>
          <TextField label="E-MAIL" value="" setValue={console.log} />
          <TextField label="NOME DE USUÁRIO" value="" setValue={console.log} />
          <TextField label="SENHA" value="" setValue={console.log} />
          <TextField
            label="DATA DE NASCIMENTO"
            value=""
            setValue={console.log}
          />
          <button className="bg-primary border-none rounded p-2 text-white font-bold">
            Continuar
          </button>
          <a href="" className="text-sm font-bold text-primary">
            Já tem uma conta?
          </a>
          <p className=" text-xs">
            Ao se registrar você concorda com os{" "}
            <a className="text-primary" href="">
              termos de serviço
            </a>{" "}
            e a{" "}
            <a className="text-primary" href="">
              política de privacidade
            </a>
          </p>
        </div>
      </div>
    </Background>
  );
};

export default Register;
