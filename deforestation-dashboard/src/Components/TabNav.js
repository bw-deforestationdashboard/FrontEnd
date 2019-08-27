import React from 'react';
import { Tab } from 'semantic-ui-react';
import CountrySearch from './CountrySearch';
import 'semantic-ui-css/semantic.min.css'

const panes = [
    { menuItem: 'Map View', render: () => <Tab.Pane></Tab.Pane> },
    { menuItem: 'Country View', render: () => <Tab.Pane>{CountrySearch}</Tab.Pane> },
    { menuItem: 'Saved Charts', render: () => <Tab.Pane></Tab.Pane> },


]
  
  const TabNav = () => <Tab panes={panes} />
  
  export default TabNav