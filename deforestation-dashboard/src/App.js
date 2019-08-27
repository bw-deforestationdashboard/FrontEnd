import React from 'react';
import TabNav from './Components/TabNav';
import { Route } from 'react-router-dom';
// import Login from './Components/Login';
// import Signup from './Components/Signup';


import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Deforestation Dashboard
      <TabNav />
     </header>

      {/* <Route path='/' component={Home} />
      <Route path='/country' component={country} />
      <Route path='/savedCharts' component={saved} /> */}
      {/* <Route path='/login' component={Login} />
      <Route path='/register' component={Signup} /> */}
    </div>
  );
}

export default App;
