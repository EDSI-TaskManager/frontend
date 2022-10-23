import { Dispatch, HTMLAttributes, SetStateAction } from "react";

interface Props extends HTMLAttributes<HTMLInputElement> {
  label: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  type?: "text" | "password";
}

export const TextField = ({
  label,
  value,
  setValue,
  type = "text",
  ...restProps
}: Props) => {
  return (
    <div>
      <p className="font-semibold mb-1">{label}</p>
      <input
        {...restProps}
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="input-base"
      />
    </div>
  );
};
