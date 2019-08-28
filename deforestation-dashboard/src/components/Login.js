import React, { useState } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
// import * as Yup from "yup";

import Logo from './Logo';

const Login = () => {
  const [login, setLogin] = useState({
    username: "",
    password: ""
  });

  const changeHandler = e => {
      setLogin({...login, [e.target.name]: e.target.value})
  }

  const submitHandler = e => {
      e.preventDefault();
      axios
      .post('https://deforestation-back-end.herokuapp.com/api/login', login)
      .then(res => {
          console.log(res)
          localStorage.setItem('token', res.data.payload)
          //need to push to saved items route
      })
      .catch(err => console.log(err))
  }

  return (
    <div>
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
          Username:
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={login.password}
            onChange={changeHandler}
          />
        </label>
        <button>Login</button>
      </form>
      <p>Don't have an account? <Link to="/register">Sign up here!</Link></p>
    </div>
  );
};



export default Login;
