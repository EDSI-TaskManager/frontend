import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";

type PropsType = {
  password: string;
  setPassword: (value: string) => void;
};

export const PasswordField = ({ password, setPassword }: PropsType) => {
  const [type, setType] = useState<"text" | "password">("password");

  const toggleType = () => {
    setType((prev) => (prev === "text" ? "password" : "text"));
  };

  return (
    <div>
      <p className="font-semibold mb-1">SENHA</p>
      <div className="flex bg-gray400 p-1 rounded border-black border h-[34px]">
        <input
          type={type}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-[100%] p-0 outline-none bg-gray400 h-6"
        />
        <button onClick={toggleType}>
          {type === "text" ? <VisibilityOff /> : <Visibility />}
        </button>
      </div>
    </div>
  );
};
