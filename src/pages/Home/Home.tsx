import React, { useState } from "react";
import "./Home.css";
import Header from "../../layouts/Header";
import { FaRegUserCircle } from "react-icons/fa";
import { MdMoreVert } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { users } from "../../db/users";
import Footer from "../../layouts/Footer";
import { vacancies } from "../../db/vacancies";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  const [search, setSearch] = useState("");

  const filteredVacancies = vacancies.filter((vacancy) =>
    vacancy.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <Header search={search} setSearch={setSearch} />

      <main className="main__container">
        <div className="vacancy__card">
          {filteredVacancies.length > 0 ? (
            filteredVacancies.map((vacancy) => (
              <Link to={`/vacancy/${vacancy.id}`} key={vacancy.id} className="vacancy__card-wrapper">
                <div className="vacancy__owner">
                  <div className="vacancy__owner-details">
                    <FaRegUserCircle className="icon-user" />
                    <div>
                      <p className="vacancy__owner-name">
                        {vacancy.owner.name}
                      </p>
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
                    <p>
                      - Requirements:
                      {vacancy.requirements.map((requirement, index) => (
                        <p key={index} className="vacancy__info-requirement">
                          • {requirement}
                        </p>
                      ))}
                    </p>
                    <p>
                      - Responsibilities:
                      {vacancy.responsibilities?.map((responsibility, index) => (
                        <p key={index} className="vacancy__info-requirement">
                          • {responsibility}
                        </p>
                      ))}
                    </p>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <p className="vacancy__card-nofound">No vacancies found</p>
          )}
        </div>

        <div className="follow__card">
          <h3>Following</h3>
          {users.map((user) => (
            <div key={user.id} className="follow__card-users">
              <div className="user__details">
                <FaRegUserCircle className="icon-user" />
                <div>
                  <p className="user__details-name">{user.name}</p>
                  <p className="user__details-profession">{user.profession}</p>
                </div>
              </div>
              <FaPlus className="icon-plus" />
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
