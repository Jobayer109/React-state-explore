import React from "react";
import Button from "../Button/Button";
import InputGroup from "./InputGroup";

const Register = () => {
  return (
    <div style={{}}>
      <div style={{ lineHeight: "5px" }}>
        <h2>Register</h2>
        <p
          style={{ color: "gray", fontFamily: "inherit", marginBottom: "2rem" }}
        >
          Thank you for Registering your info in our page.
        </p>
      </div>
      <form>
        <div>
          <InputGroup
            label="Your name"
            type="text"
            name="name"
            placeholder="name"
          />
          <InputGroup
            label="Your email"
            type="email"
            name="email"
            placeholder="email"
          />
          <InputGroup
            label="Your password"
            type="password"
            name="password"
            placeholder="password"
          />
        </div>
        <div style={{ marginTop: "1rem" }}>
          <Button type="submit" value="Sign Up" />
        </div>
      </form>
    </div>
  );
};

export default Register;
