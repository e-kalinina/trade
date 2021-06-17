import { FC } from "react";

import "./button.scss";

interface IButton {
  text: string;
  className: string;
  onClick: () => void;
}

const Button: FC<IButton> = ({ text, className, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
