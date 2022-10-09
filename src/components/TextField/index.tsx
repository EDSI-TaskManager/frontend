import { Dispatch, HTMLAttributes, SetStateAction } from "react";

interface Props extends HTMLAttributes<HTMLInputElement> {
  label: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}

export const TextField = ({ label, value, setValue, ...restProps }: Props) => {
  return (
    <div>
      <p className="font-semibold mb-1">{label}</p>
      <input
        {...restProps}
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="bg-gray400 text-white border-black border outline-0 rounded p-1 w-full"
      />
    </div>
  );
};
