import React from 'react';
import { Link } from 'react-router-dom';

import Button from './Button';

export default function Header () {
    return (
      <div>
          <Link to='/'>
            <h1 className="App-header">
              DEFORESTATION DASHBOARD
            </h1>
          </Link>
         <Button text='Login' link='/login' />
         <Button text='Sign Up' link='/register' />
      </div>
    );
};