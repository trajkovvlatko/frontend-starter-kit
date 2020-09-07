import React, {useContext} from 'react';
import {NavLink} from 'react-router-dom';
import {SidebarStateContext} from 'contexts/SidebarStateContext';
import './Sidebar.scss';

function Sidebar() {
  const toggle = useContext(SidebarStateContext).toggle;

  return (
    <div>
      <h1>Sidebar</h1>
      <ul>
        <li>
          <NavLink exact to='/' activeClassName='active'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink exact to='/about' activeClassName='active'>
            About
          </NavLink>
        </li>
        <li>
          <NavLink exact to='/order' activeClassName='active'>
            Order
          </NavLink>
        </li>
      </ul>

      <button onClick={toggle}>Toggle sidebar</button>
    </div>
  );
}

export default Sidebar;
