import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const Background = ({ children }: Props) => {
  return (
    <div className="h-full w-full bg-default bg-cover bg-no-repeat">
      {children}
    </div>
  );
};
