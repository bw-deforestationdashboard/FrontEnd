import React from 'react';

import Logo from './Logo';
import Button from './Button';

export default function Header () {
    return (
      <div>
        <Logo />
        <Button text='Login' link='/login' />
        <Button text='Sign Up' link='/register' />
      </div>
    );
};
