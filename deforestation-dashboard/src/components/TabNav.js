import React, { useState, useEffect } from 'react';
import { Menu } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { Link, Route } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';

import MapView from './MapView';
import CountryView from './CountryView';
import SavedPublic from './SavedPublic';

function TabNav(props) {
  const [activeItem, setActiveItem ] = useState(props.location.pathname);

  const handleItemClick = (e, {name}) => {
    setActiveItem(name);
  }

  useEffect(() => {
    if (activeItem !== props.location.pathname) {
      setActiveItem(props.location.pathname)
    }
  }, [props.location.pathname])

  return (
    <>
      <Menu color='green' inverted tabular>
        <Menu.Item 
          className="menu-tab"
          as={ Link }
          to='/map-view'
          name='/map-view'
          active={activeItem === '/map-view'}
          onClick={handleItemClick}
        >
          Maps
        </Menu.Item>
        <Menu.Item
          className="menu-tab"
          as={ Link }
          to='/country-view'
          name='/country-view'
          active={activeItem === '/country-view'}
          onClick={handleItemClick}
        >
          Data by Country
        </Menu.Item>
        <Menu.Item
          className="menu-tab"
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
      <PrivateRoute path='/saved' component={SavedPublic} />
    </>
)
}

export default TabNav