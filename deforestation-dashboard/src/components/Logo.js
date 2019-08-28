import React from 'react';

import { Link } from 'react-router-dom';

export default function Logo() {
   return (
      <Link to='/map-view' className="logo">
         <h1>
            DEFORESTATION DASHBOARD
         </h1>
      </Link>
   )
}
