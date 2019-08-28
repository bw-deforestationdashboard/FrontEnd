import React, { useState } from "react";
import { Route } from "react-router-dom";
import sampleData from "./sampleData";

import Welcome from './components/Welcome';
import Main from './components/Main';
import Login from './components/Login';
import Signup from './components/Signup';
import MapView from './components/MapView';
import CountryView from './components/CountryView';
import SavedPublic from './components/SavedPublic';
import { DataContext } from "./contexts/DataContext";
import Footer from './components/Footer';


import "./App.css";

function App() {
  const [data] = useState(sampleData);

  return (
    <div className="App">
      <DataContext.Provider value={data}>
        <Route exact path='/' component={Welcome}/>
        <Route path='/main' component={Main} />
        <Route path='/main/map-view' component={MapView} />
        <Route path='/main/country-view' component={CountryView} />
        <Route path='/main/saved' component={SavedPublic} />
        <Route path='/main' component={Footer} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Signup} />
      </DataContext.Provider>
    </div>
  );
}

export default App;
