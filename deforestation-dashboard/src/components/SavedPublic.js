import React, { useState, useEffect } from "react";
import Button from "./Button";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { getThemeProps } from "@material-ui/styles";

const SavedPublic = (props) => {
  console.log(props)
  const [editing, setEditing] = useState(false);
  const {setActiveUser, activeUser, history} = props
  const handleChange = e => {
    setActiveUser({ ...activeUser, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .put(
        `https://deforestation-back-end.herokuapp.com/api/users/${activeUser.id}`,
        activeUser
      )
      .then(res => {
        console.log("PUT request completed successfully", res);
        setEditing(false);
      })
      .catch(err => console.log("PUT error", err.response));
  };

  const deleteUser = (e, activeUser) => {
    e.stopPropagation();
    e.preventDefault();
    axiosWithAuth()
      .delete(`https://deforestation-back-end.herokuapp.com/api/users/${activeUser.id}`)
      .then(res => {
        console.log("DELETE request completed successfully", res)
        alert("Bye!")
        localStorage.clear()
        history.push('/')
      })
      .catch(err => console.log("DELETE error", err.response));
  }

  return (
    <div className="content CountryView">
      <h2>Welcome!</h2>
      <button className="btn" onClick={() => setEditing(true)}>
        I want to change my username!
      </button>
      <button className="btn" onClick={(e) => deleteUser(e, activeUser)}>
        I want to delete my account!
      </button>

      {editing && (
        <form className="Login" onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={activeUser.username}
            onChange={handleChange}
          ></input>
          <button className="btn" >Save</button>
          <button className="btn" 
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
