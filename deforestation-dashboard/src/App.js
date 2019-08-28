import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import sampleData from "./sampleData";

import Main from './components/Main';
import Login from './components/Login';
import Signup from './components/Signup';
import { DataContext } from "./contexts/DataContext";

import "./App.css";

function App() {
  const [data] = useState(sampleData);

  return (
    <div className="App">
      <DataContext.Provider value={data}>
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/register' component={Signup} />
          <Route path='/' component={Main}/>
        </Switch>
      </DataContext.Provider>
    </div>
  );
}

export default App;