import React, { useState } from 'react';
import { Menu } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { Link } from 'react-router-dom';

function TabNav() {
  const [activeItem, setActiveItem ] = useState('map');

  const handleItemClick = (e, {name}) => {
    setActiveItem(name);
  }

  return (
    <Menu tabular>
      <Menu.Item 
        as={ Link }
        to='/main'
        name='map'
        active={activeItem === 'map'}
        onClick={handleItemClick}
      >
        Map View
      </Menu.Item>
      <Menu.Item
        as={ Link }
        to='/main/country-list'
        name='country'
        active={activeItem === 'country'}
        onClick={handleItemClick}
      >
        Country View
      </Menu.Item>
      <Menu.Item
        as={ Link }
        to='/main/saved'
        name='saved'
        active={activeItem === 'saved'}
        onClick={handleItemClick}
      >
        Saved Charts
      </Menu.Item>
    </Menu>
)
}

export default TabNav