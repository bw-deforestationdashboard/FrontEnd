import React, { useState, useEffect } from "react";
import Button from "./Button";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const SavedPublic = props => {
  const [editing, setEditing] = useState(false);
  const [user, setUser] = useState({
    username: "Old username here"
  });


  
  const handleChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .put(
        `https://deforestation-back-end.herokuapp.com/api/users/${user.id}`,
        user
      )
      .then(res => {
        console.log(res);
        setEditing(false);
      })
      .catch(err => console.log("PUT error", err.response));
  };

  return (
    <div>
      <p>Welcome! </p>
      <button onClick={() => setEditing(true)}>
        I want to change my username!
      </button>

      {editing && (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={user.username}
            onChange={handleChange}
          ></input>
          <button>Save</button>
          <button
            onClick={() => {
              setEditing(false);
            }}
          >
            Cancel
          </button>
        </form>
      )}
    </div>
  );
};

export default SavedPublic;
