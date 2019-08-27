import React from 'react';

import TabNav from './TabNav';
import Header from './Header';

export default function Home(props) {
   return (
      <div>
         <Header />
         <TabNav {...props} />
      </div>
   )
}