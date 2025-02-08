import React from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="auth-container">
      <div className="home-buttons">
        <button onClick={() => navigate("/login")}>Login</button>
        <br></br>
        <br></br>
      </div>
    </div>
  );
};

export default Home;
