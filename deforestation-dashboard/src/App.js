import React from 'react';
import { Route } from 'react-router-dom';

import Welcome from './components/Welcome';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import CountryList from './components/CountryList';
import SavedPublic from './components/SavedPublic';

import './App.css';

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={Welcome}/>
      <Route path='/main' component={Home} />
      <Route path='/main/country-list' component={CountryList} />
      <Route path='/main/saved' component={SavedPublic} />
      {/* <Route path='/country-list' />
      <Route path='/saved' /> */}
      <Route path='/login' component={Login} />
      <Route path='/register' component={Signup} />
    </div>
  );
}

export default App;
