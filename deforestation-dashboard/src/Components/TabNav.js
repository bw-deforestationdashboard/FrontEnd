import React, { useState } from 'react';
import { Tab, Menu } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { Link, Route } from 'react-router-dom';

import MapView from './MapView';
import CountryView from './CountryView';
import SavedPublic from './SavedPublic';

function TabNav(props) {
  const [activeItem, setActiveItem ] = useState(props.location.pathname);

  const handleItemClick = (e, {name}) => {
    setActiveItem(name);
  }

  return (
    <>
      <Menu tabular>
        <Menu.Item 
          as={ Link }
          to='/map-view'
          name='/map-view'
          active={activeItem === '/map-view'}
          onClick={handleItemClick}
        >
          Map View
        </Menu.Item>
        <Menu.Item
          as={ Link }
          to='/country-view'
          name='/country-view'
          active={activeItem === '/country-view'}
          onClick={handleItemClick}
        >
          Country View
        </Menu.Item>
        <Menu.Item
          as={ Link }
          to='/saved'
          name='/saved'
          active={activeItem === '/saved'}
          onClick={handleItemClick}
        >
          Saved Charts
        </Menu.Item>
      </Menu>
      <Route path='/map-view' component={MapView} />
      <Route path='/country-view' component={CountryView} />
      <Route path='/saved' component={SavedPublic} />
    </>
)
}

export default TabNav