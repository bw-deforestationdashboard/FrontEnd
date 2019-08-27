import React from './node_modules/react';
import { Tab } from './node_modules/semantic-ui-react';
import './node_modules/semantic-ui-css/semantic.min.css'

const panes = [
    { menuItem: 'Map View', render: () => <Tab.Pane></Tab.Pane> },
    { menuItem: 'Country View', render: () => <Tab.Pane></Tab.Pane> },
    { menuItem: 'Saved Charts', render: () => <Tab.Pane></Tab.Pane> },


]
  
  const TabNav = () => <Tab panes={panes} />
  
  export default TabNav