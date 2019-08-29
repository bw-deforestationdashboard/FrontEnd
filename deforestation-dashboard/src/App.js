import React, { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import sampleData from "./sampleData";

import Main from './components/Main';
import Login from './components/Login';
import Signup from './components/Signup';
import { DataContext } from "./contexts/DataContext";
import { SavedContext } from "./contexts/SavedContext";

import "./App.css";

function App() {
  const [data] = useState(sampleData);

  const [activeUser, setActiveUser] = useState("" /* amend based on whether login/POST response gives full user object */)

  return (
    <div className="App">
      <DataContext.Provider value={data}>
        <SavedContext.Provider>
        <Switch>
          <Route path='/login' render={(props) => <Login {...props} setActiveUser={setActiveUser} />} />
          {/* <Route path='/login' component={Login} /> */}
          <Route path='/register' component={Signup} />
          <Route path='/' component={Main}/>
        </Switch>
        <Redirect from='/' to='/map-view'/>
        </SavedContext.Provider>
      </DataContext.Provider>
    </div>
  );
}

export default App;