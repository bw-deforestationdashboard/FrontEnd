import React, { useState } from "react";
import axios from 'axios';
import axiosWithAuth from './utils/axiosWithAuth.js'

const Signup = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: ""
  });

  const changeHandler = e => {
      setUser({...user, [e.target.name]: e.target.value})
  }

  const submitHandler = e => {
      e.preventDefault();
      axiosWithAuth
      .post('', user)
      .then(res => {
          console.log(res)
          //props.history.push(/* '/login' SET UP THIS ROUTE! */) !
      })
      .catch(err => console.log(err))
  }

  return (
    <div>
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
          Username:
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={user.password}
            onChange={changeHandler}
          />
        </label>
        <label>
          Username:
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={user.email}
            onChange={changeHandler}
          />
        </label>
      </form>
    </div>
  );
};

export default Signup;
