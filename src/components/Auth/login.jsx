import React from "react";
import Button from "../Button/Button";
import InputGroup from "./InputGroup";

const Login = () => {
  return (
    <div>
      <h2>Login</h2>
      <form>
        <InputGroup
          label="Enter email"
          type="email"
          name="email"
          placeholder="email"
        />
        <InputGroup
          label="Enter password"
          type="password"
          name="password"
          placeholder="password"
        />
        <div style={{ marginTop: "1rem" }}>
          <Button type="submit" value="Login" />
        </div>
      </form>
    </div>
  );
};

export default Login;
