import React from "react";
import "./CButton.css";
import { CButtonTypes } from "./CButtonTypes";

const CButton: React.FC<CButtonTypes> = ({
  title,
  onClick,
  disabled,
  style,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className="btn"
      style={{ ...style }}
    >
      {title}
    </button>
  );
};

export default CButton;
