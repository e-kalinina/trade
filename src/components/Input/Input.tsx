import React, { FC, HTMLAttributes } from "react";

import "./input.scss";

interface InputProps extends HTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  type: string;
  pattern?: string;
  error?: string;
  placeholder: string;
  value: number | string | null;
  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps> = ({
  name,
  label,
  type,
  value,
  pattern,
  error,
  placeholder,
  onChangeHandler,
  ...rest
}) => {
  return (
    <div>
      <label htmlFor={name} className="input__label">
        {label}
      </label>
      <input
        className="input__field"
        value={value!}
        type={type}
        placeholder={placeholder}
        pattern={pattern && pattern}
        id={name}
        {...rest}
        onChange={onChangeHandler}
      />
      <p className="input__error">{error}</p>
    </div>
  );
};

export default Input;
