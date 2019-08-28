import React from 'react';

import { Link } from 'react-router-dom';

export default function Logo() {

   return (
      <Link to='/map-view'>
         <h1 className="logo">
            DEFORESTATION DASHBOARD
         </h1>
      </Link>
   )
}
