import React from "react";
import "./Vacancy.css";
import { useLocation } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import { MdMoreVert } from "react-icons/md";
import { IoArrowBackCircleSharp } from "react-icons/io5";

const Vacancy: React.FC = () => {
  const location = useLocation();
  const vacancy = location.state?.vacancy;

  const goBack = () => {
    window.history.back();
  };

  return (
    <div className="container">
      <IoArrowBackCircleSharp className="icon-back" onClick={goBack} />

      <div className="vacancy__card">
        <div className="vacancy__card-wrapper">
          <div className="vacancy__owner">
            <div className="vacancy__owner-details">
              <FaRegUserCircle className="icon-user" />
              <div>
                <p className="vacancy__owner-name">{vacancy.owner.name}</p>
                <p className="vacancy__owner-profession">
                  {vacancy.owner.profession}
                </p>
              </div>
            </div>
            <MdMoreVert className="icon-more" />
          </div>
          <div className="vacancy__info">
            <h3 className="vacancy__info-title">{vacancy.title}</h3>
            <div className="vacancy__info-details">
              <p>{vacancy.description}</p>
              <p>- Status: {vacancy.status}</p>
              <p>- Location: {vacancy.location}</p>
              <p>- Salary: {vacancy.salary}</p>
              <div>
                - Requirements:
                {vacancy.requirements.map(
                  (requirement: string, index: number) => (
                    <p key={index} className="vacancy__info-requirement">
                      • {requirement}
                    </p>
                  )
                )}
              </div>
              <div>
                - Responsibilities:
                {vacancy.responsibilities?.map(
                  (responsibility: string, index: number) => (
                    <p key={index} className="vacancy__info-requirement">
                      • {responsibility}
                    </p>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vacancy;
