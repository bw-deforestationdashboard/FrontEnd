import React, { useState } from 'react';
import { Menu } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { Link } from 'react-router-dom';

function TabNav(props) {
  const [activeItem, setActiveItem ] = useState(props.location.pathname);

  const handleItemClick = (e, {name}) => {
    setActiveItem(name);
  }

  return (
    <Menu tabular>
      <Menu.Item 
        as={ Link }
        to='/main'
        name='/main'
        active={activeItem === '/main'}
        onClick={handleItemClick}
      >
        Map View
      </Menu.Item>
      <Menu.Item
        as={ Link }
        to='/main/country-list'
        name='/main/country-list'
        active={activeItem === '/main/country-list'}
        onClick={handleItemClick}
      >
        Country View
      </Menu.Item>
      <Menu.Item
        as={ Link }
        to='/main/saved'
        name='/main/saved'
        active={activeItem === '/main/saved'}
        onClick={handleItemClick}
      >
        Saved Charts
      </Menu.Item>
    </Menu>
)
}

export default TabNav