import React from "react";
import "./Header.css";
import CInput from "../../components/CInput";
import CButton from "../../components/CButton";
import { IoSearch } from "react-icons/io5";
import { HeaderTypes } from "./HeaderTypes";

const Header: React.FC<HeaderTypes> = ({ search, setSearch }) => {
  return (
    <div className="header">
      <a href="/" className="header-logo">
        <h1>JC</h1>
      </a>

      <CInput
        icon={<IoSearch />}
        value={search}
        onChange={setSearch}
        placeholder="Search job..."
      />

      <CButton title="LOGIN" onClick={() => console.log("Login")} />
    </div>
  );
};

export default Header;
