import React from 'react';

import Button from './Button';

export default function SavedPublic() {
   return (
      <div>
         <Button text="Login" link="/login" />
         or 
         <Button text="Sign Up" link="/register" />
         to start saving charts!
      </div>
   )
}
