import React from 'react';
import { Tab } from 'semantic-ui-react';
import CountryList from './CountryList';
import 'semantic-ui-css/semantic.min.css'


const panes = [
    { menuItem: 'Map View', render: () => <Tab.Pane></Tab.Pane> },
    { menuItem: 'Country View', render: () => <Tab.Pane><CountryList /></Tab.Pane> },
    { menuItem: 'Saved Charts', render: () => <Tab.Pane></Tab.Pane> },


]
  
  const TabNav = () => <Tab panes={panes} />
  
  export default TabNav