import React from 'react';
import { Tab } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

import SavedPublic from './SavedPublic';
import CountryView from './CountryView';
import MapView from './MapView';

const panes = [
    { menuItem: 'Map View', render: () => <Tab.Pane><MapView /></Tab.Pane> },
    { menuItem: 'Country View', render: () => <Tab.Pane><CountryView /></Tab.Pane> },
    { menuItem: 'Saved Charts', render: () => <Tab.Pane><SavedPublic /></Tab.Pane> },
]
  
const TabNav = () => <Tab panes={panes} />

export default TabNav