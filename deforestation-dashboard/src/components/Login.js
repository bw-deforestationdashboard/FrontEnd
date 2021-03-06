import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Logo from "./Logo";

const Login = ({ activeUser, setActiveUser, history }) => {
 
  const [login, setLogin] = useState({
    username: "",
    password: ""
  });

  const changeHandler = e => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const submitHandler = e => {
    e.preventDefault();
    axios
      .post("https://deforestation-back-end.herokuapp.com/api/login", login)
      .then(res => {
          console.log("Login. POST request completed successfully", res)
          setActiveUser(res.data.user)
          console.log(activeUser)
          localStorage.setItem('token', res.data.token)
          history.push("/saved")
      })
      .catch(err => {
        console.log(err);
        alert("We're sorry. Please try again.");
        setLogin({
          username: "",
          password: ""
        });
      });
  };

  return (
    <>
      <div className="Login">
        <Logo />
        <form onSubmit={submitHandler}>
          <label>
            Username:
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={login.username}
              onChange={changeHandler}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={login.password}
              onChange={changeHandler}
            />
          </label>
          <button className ="btn login-btn">Login</button>
        </form>
        <p>
          Don't have an account? <Link to="/register">Sign up here!</Link>
        </p>
      </div>
    </>
  );
};

export default Login;
