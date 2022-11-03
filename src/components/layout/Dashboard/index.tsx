import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const Dashboard = ({ children }: Props) => {
  return (
    <div className="bg-gray-400 h-full flex flex-col p-4 gap-4 lg:grid lg:gap-8 grid-cols-3 grid-rows-3 justify-items-center lg:p-8">
      {children}
    </div>
  );
};
