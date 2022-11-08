import { useState } from "react";
import { Role } from "../../interfaces/IUser";

type Props = {
  label: string;
  selected: Role;
  options: [string, string];
  onRoleChange: (role: Role) => void;
};

export const Switch = ({ label, options, selected, onRoleChange }: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(selected);

  const handleClick = (index: number) => {
    const role = index === 0 ? "Employee" : "Manager";
    setSelectedIndex(role);
    onRoleChange(role);
  };

  return (
    <div>
      <p className="input-label">{label}</p>
      <div className="flex text-white cursor-pointer relative bg-gray-300 rounded border border-gray-400">
        {options.map((option, index) => (
          <div
            key={index}
            onClick={() => handleClick(index)}
            className={`z-10 p-2 text-center w-6/12`}
          >
            {option}
          </div>
        ))}
        <div
          className={`w-44 h-10 absolute bg-primary ease-out duration-500 ${
            selectedIndex === "Employee"
              ? "rounded-tl rounded-bl left-0"
              : "rounded-tr rounded-br left-44"
          }`}
        ></div>
      </div>
    </div>
  );
};
