import { Dispatch, HTMLAttributes, SetStateAction } from "react";

interface Props extends HTMLAttributes<HTMLInputElement> {
  label: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  type?: "text" | "password";
  errorLabel?: string | null;
}

export const TextField = ({
  label,
  value,
  setValue,
  type = "text",
  errorLabel,
  ...restProps
}: Props) => {
  return (
    <div>
      <p className="input-label">{label}</p>
      <input
        {...restProps}
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="input-base"
      />

      {!!errorLabel && <p className="input-error-label">{errorLabel}</p>}
    </div>
  );
};
