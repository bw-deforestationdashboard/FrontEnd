import React from 'react';
import Bargraph from './components/bargraph';
import './App.css';
import PrivateRoute from '../src/components'


function App() {
  return (
    <div className="App">
      <header className="App-header">
       DEFORESTATION DASHBOARD
      </header>
     <Bargraph />
    </div>
  );
}

<div className="App">

<PrivateRoute path= "../src/components" component={} />
<Route path="/login" component={Login} />
<Route path="/signup" component={Signup} />

</div>


export default App;
