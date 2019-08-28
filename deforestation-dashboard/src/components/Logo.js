import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

export default function Logo() {
   const StyledLogo = styled.h1`
      
   `

   return (
      <Link to='/map-view'>
         <h1>
            DEFORESTATION DASHBOARD
         </h1>
      </Link>
   )
}
