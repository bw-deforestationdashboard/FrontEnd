import React, { useState } from "react";
import { Route } from "react-router-dom";
import sampleData from "./sampleData";

import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { DataContext } from "./contexts/DataContext";

import "./App.css";

function App() {
  const [data] = useState(sampleData);


  return (
    <div className="App">
      <DataContext.Provider value={data}>
        <Route exact path="/" component={Home} />
        {/* <Route path='/country' component={country} /> */}
        {/* <Route path='/savedCharts' component={saved} /> */}
        <Route path="/login" component={Login} />
        <Route path="/register" component={Signup} />
      </DataContext.Provider>
    </div>
  );
}

export default App;
