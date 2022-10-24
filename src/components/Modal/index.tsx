import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  title: string;
  onClose: () => void;
}

export const Modal = ({ children, title, onClose }: Props) => {
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 flex bg-gray-400/[0.8]">
      <div className="p-4 bg-gray-100 flex flex-col w-96 rounded-md m-auto">
        <div className=" flex justify-between mb-4">
          <div className="text-white ">{title}</div>
          <div
            className="text-white font-bold cursor-pointer text-xl"
            onClick={onClose}
          >
            X
          </div>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};
