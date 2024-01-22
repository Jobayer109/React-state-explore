import React from "react";
import Login from "../Auth/login";
import Register from "../Auth/signUp";

const Controller = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Explore React State</h1>
      <div>
        <Register />
        <Login />
      </div>
    </div>
  );
};

export default Controller;
