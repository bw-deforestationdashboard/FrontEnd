import React, { useState } from "react";
import axios from 'axios';

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
      .post('', login)
      .then(res => {
          console.log(res)
          localStorage.setItem('token', res.data.payload)
          //need to push to saved items route
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
      </form>
    </div>
  );
};

export default Login;