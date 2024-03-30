import React from "react";
import "./Home.css";
import Header from "../../layouts/Header";
import { FaRegUserCircle } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { users } from "../../db/users";

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="main__container">
        <div className="follow__card">
          <h3>Following</h3>
          {users.map((user) => {
            return (
              <div key={user.id} className="follow__card-users">
                <div className="user__details">
                  <FaRegUserCircle className="user-icon" />
                  <div>
                    <p className="user__details-name">{user.name}</p>
                    <p className="user__details-profession">
                      {user.profession}
                    </p>
                  </div>
                </div>
                <FaPlus className="plus-icon" />
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default Home;
