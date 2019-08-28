import React from 'react';

import TabNav from './TabNav';
import Header from './Header';
import Footer from './Footer';

export default function Main(props) {
   return (
      <div>
         <Header />
         <TabNav {...props} />
         <Footer />
      </div>
   )
}