import React, { useState, useEffect, useContext } from "react";
import Button from "./Button";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { SavedContext } from "../contexts/SavedContext";

const SavedPublic = props => {
  const { removeCountry, saved } = useContext(SavedContext); //saved list management

  const [editing, setEditing] = useState(false);
  const [user, setUser] = useState({
    username: ''
  });

  const handleChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .put(`https://deforestation-back-end.herokuapp.com/api/users/:id`, user)
      .then(res => {
        console.log("from put", res);
        setEditing(false);
        setUser(user.username)
      })
      .catch(err => console.log("PUT error", err.response));
  };
  console.log("user", user)

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
