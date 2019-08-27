import React from 'react';
import { Route } from 'react-router-dom';

import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';

import './App.css';

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={Home} />
      {/* <Route path='/country' component={country} /> */}
      {/* <Route path='/saved' component={saved} /> */}
      <Route path='/login' component={Login} />
      <Route path='/register' component={Signup} />
    </div>
  );
}

export default App;
