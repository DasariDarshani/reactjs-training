import React from "react";
import Directory from "../../components/directory/directory-component";
import NavBar from "../../components/navbar/navbar-component";
import "./homepage-styles.scss";

const HomePage = () => {
  return (
    <div className="home-page">
      <NavBar />
      <Directory />
    </div>
  );
};

export default HomePage;
