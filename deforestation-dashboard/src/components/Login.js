import React, { useState } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
// import * as Yup from "yup";

import Logo from './Logo';
import Footer from './Footer';

const Login = props => {
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
          props.history.push("/saved")
      })
      .catch(err => {
        console.log(err)
        alert("We're sorry. Please try again.")
        setLogin({ 
          username: "",
          password: ""
          })
  })}  

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
          Password:
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
      <Footer />
    </div>
  );
};



export default Login;
