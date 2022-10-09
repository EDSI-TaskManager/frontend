import { Dispatch, HTMLAttributes, SetStateAction } from "react";

interface Props extends HTMLAttributes<HTMLInputElement> {
  label: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}

export const TextField = ({ label, value, setValue, ...restProps }: Props) => {
  return (
    <div>
      <p>{label}</p>
      <input
        {...restProps}
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="bg-gray100 text-white border-gray400 border-2 outline-0 rounded p-1"
      />
    </div>
  );
};
