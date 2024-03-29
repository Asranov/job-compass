import React from "react";
import "./Home.css";
import Header from "../../layouts/Header";

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="main__container">
        <h1>Main</h1>
      </main>
    </div>
  );
};

export default Home;
