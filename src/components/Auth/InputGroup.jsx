import React from "react";

const InputGroup = ({ label, type, name, placeholder, id }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        marginTop: ".5rem",
      }}
    >
      <label
        style={{
          fontSize: ".9rem",
          fontFamily: "sans-serif",
          marginBottom: "3px",
        }}
        htmlFor="name"
      >
        {label}
      </label>
      <input
        style={{
          padding: "5px 8px",
          border: "1px solid gray",
          borderRadius: "4px",
          outline: "none",
          fontFamily: "cursive",
          fontSize: "1rem",
          color: "GrayText",
        }}
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputGroup;
