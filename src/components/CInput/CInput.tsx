import React from "react";
import "./CInput.css";
import { CInputTypes } from "./CInputTypes";

const CInput: React.FC<CInputTypes> = ({
  value,
  onChange,
  placeholder = "Please enter text...",
  icon,
  type,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className="input__container">
      <input
        type={type}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className={`input ${icon ? "" : "input-noicon"}`}
      />
      {icon && <div className="input-icon">{icon}</div>}
    </div>
  );
};

export default CInput;
