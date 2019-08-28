import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import Button from './Button';

export default function Header () {
    return (
      <div>
        <Logo />
        {!localStorage.getItem('token') && <Button text='Login' link='/login' />}
        {!localStorage.getItem('token') && <Button text='Sign Up' link='/register' />}
        {localStorage.getItem('token') && <Link to="/" onClick={() => localStorage.clear()}>
          <button>Logout</button></Link>}
      </div>
    );
};
