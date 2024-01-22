import React from "react";

const Button = ({ type, value }) => {
  return (
    <div>
      <button
        style={{
          padding: ".5rem 1.5rem",
          border: "1px solid gray",
          borderRadius: "3px",
          fontSize: "1rem",
          fontFamily: "sans-serif",
          fontWeight: "bold",
          letterSpacing: "1px",
          backgroundColor: "black",
          color: "whitesmoke",
          cursor: "pointer",
        }}
        type={type}
      >
        {value}
      </button>
    </div>
  );
};

export default Button;
