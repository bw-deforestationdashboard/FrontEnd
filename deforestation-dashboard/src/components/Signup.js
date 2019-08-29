import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { Link } from "react-router-dom";

import Logo from './Logo';
import Footer from './Footer';

const Signup = (props) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: ""
  });

  const changeHandler = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const submitHandler = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("https://deforestation-back-end.herokuapp.com/api/register", user)
      .then(res => {
        console.log(res);
        props.history.push('/login')
      })
      .catch(err => {
        console.log(err)
        alert("We're sorry. Please try again.")
        setUser({ 
          username: "",
          password: "",
          email: ""})
      });
  };

  return (
    <>
      <div className="Signup">
        <Logo />
        <form onSubmit={submitHandler}>
          <label>
            Username: 
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={user.username}
              onChange={changeHandler}
            />
          </label>
          <label>
            Password: 
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={user.password}
              onChange={changeHandler}
            />
          </label>
          <label>
            Email: 
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={user.email}
              onChange={changeHandler}
            />
          </label>
          <button className="btn signup-btn">Register</button>
        </form>
        <p>
          Already have an account? <Link to="/login">Login here!</Link>
        </p>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Signup; 
