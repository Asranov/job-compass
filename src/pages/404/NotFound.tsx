import React from "react";
import "./NotFound.css";
import CButton from "../../components/CButton";

const NotFound: React.FC = () => {
  const goBack = () => {
    window.history.back();
  };

  return (
    <div className="not__found">
      <h2 className="not__found-title">404 - Page Not Found</h2>
      <p className="not__found-description">Oops! something went wrong</p>
      <CButton title="Go Back" onClick={goBack} />
    </div>
  );
};

export default NotFound;
