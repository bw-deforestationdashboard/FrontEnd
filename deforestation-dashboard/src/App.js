import React, { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import sampleData from "./sampleData";

import Main from "./components/Main";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { DataContext } from "./contexts/DataContext";
import { SavedContext } from "./contexts/SavedContext";
import useLocalStorage from "./utils/useLocalStorage";

import "./App.css";

function App() {
  const [data] = useState(sampleData);

  const [saved, setSaved] = useLocalStorage('saved', []);
  const addItem = item => {
		setSaved([...saved, item]);
	};
	const removeItem = item => {
		setSaved([...saved].filter(i => i !== item))
	}

  const [activeUser, setActiveUser] = useState({
    email: "",
    id: "",
    password: "",
    username: ""
  });

  return (
    <div className="App">
      <DataContext.Provider value={data}>
        <SavedContext.Provider value={{saved, addItem, removeItem}}>
          <Switch>
            <Route
              path="/login"
              render={props => (
                <Login
                  {...props}
                  activeUser={activeUser}
                  setActiveUser={setActiveUser}
                />
              )}
            />
            {/* <Route path='/login' component={Login} /> */}
            <Route path="/register" component={Signup} />
            <Route
              path="/"
              render={props => (
                <Main
                  {...props}
                  setActiveUser={setActiveUser}
                  activeUser={activeUser}
                />
              )}
            />
          </Switch>
          <Redirect from="/" to="/map-view" />
        </SavedContext.Provider>
      </DataContext.Provider>
    </div>
  );
}

export default App;
