import React, { useState } from "react";
import "./Login.css";
const Login = () => {
  const [input, setInput] = useState("");
  const valueChangeHandler = (e) => {
    setInput(e.target.value);
    console.log(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    setInput("");
  };
  return (
    <div className="login">
      <form className="form" onSubmit={submitHandler}>
        <h1 className="title">Login</h1>
        <input
          type="text"
          placeholder="Username"
          name="username"
          className="input-text"
          value={input}
          onChange={(e) => valueChangeHandler(e)}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          className="input-text"
          value={input}
          onChange={(e) => valueChangeHandler(e)}
        />
        <button className="button" onSubmit={submitHandler}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
