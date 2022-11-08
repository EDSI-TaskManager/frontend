import Link from "next/link";
import { useState, MouseEventHandler } from "react";

import { api } from "../../services/api";
import { Role } from "../../interfaces/IUser";
import { Background } from "../../components/layout";
import { TextField, PasswordField, Switch } from "../../components";

const Register = () => {
  const [role, setRole] = useState<Role>("Employee");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit: MouseEventHandler<HTMLButtonElement> = async () => {
    if (role === "Employee") {
      const { EmployeeController } = await import("../../controllers/");
      const employeeController = new EmployeeController(api);

      try {
        const response = await employeeController.create({
          email,
          password,
          name,
          office: "",
        });

        console.log(response);
      } catch (error) {
        console.error(error);
      }
    } else {
      const { ManagerController } = await import("../../controllers/");
      const managerController = new ManagerController(api);

      try {
        const response = await managerController.create({
          name,
          email,
          password,
        });

        console.log(response);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <Background>
      <div className="block h-screen sm:flex sm:justify-center sm:items-center animate-appearFromLeft">
        <div className="h-full bg-gray-100 flex flex-col gap-4 justify-center sm:w-[26rem] p-8 sm:rounded-lg sm:h-auto">
          <p className="text-center text-white text-2xl font-bold ">
            Criar uma conta
          </p>
          <Switch
            label="CARGO"
            options={["Funcionário", "Supervisor"]}
            selected={role}
            onRoleChange={setRole}
          />
          <TextField label="E-MAIL" value={email} setValue={setEmail} />
          <TextField label="NOME" value={name} setValue={setName} />
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
