import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import Button from './Button';

export default function Header () {
    return (
      <div>
        <Logo />
        <Button text='Login' link='/login' />
        <Button text='Sign Up' link='/register' />
        <Link to="/login" onClick={() => localStorage.clear()}><button>Logout</button></Link>
      </div>
    );
};
