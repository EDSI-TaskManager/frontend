import { useAuth } from "../hooks/auth";
import { Logo } from "./Logo";

type Props = {
  pageName: string;
};

export const Header = ({ pageName }: Props) => {
  const { user } = useAuth();

  return (
    <div className="bg-gray-100 rounded-br-2xl rounded-bl-2xl pl-8 pr-8 h-24 flex justify-between items-center">
      <Logo />
      <p className="large-text">{pageName}</p>
      <p className="large-text">
        Bem-vindo
        {user?.name && `, ${user.name.split(" ").at(0)}`}
      </p>
    </div>
  );
};
