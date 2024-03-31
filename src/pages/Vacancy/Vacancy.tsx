import React from "react";
import "./Vacancy.css";
import { useLocation } from "react-router-dom";

const Vacancy: React.FC = () => {
  const location = useLocation();
  const vacancy = location.state?.vacancy;
  console.log(vacancy);

  return <div>Vacancy</div>;
};

export default Vacancy;
