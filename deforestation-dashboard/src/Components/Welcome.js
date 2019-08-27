import React from 'react';

import Button from './Button';

export default function Welcome() {
   return (
      <div>
         <h1>Welcome to Deforestation Dashboard</h1>
         <Button text="Enter" link="/main" />
      </div>
   )
}