import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/Calculator',
      text: 'Calculator',
    },
    {
      id: 3,
      path: '/Quote',
      text: 'Quote',
    },
  ];

  return (
    <nav className="navBar">
      <h1>Math Magicians</h1>
      <ul className="menuNav">
        {links.map((link) => <li key={link.id}><NavLink to={link.path} activeClassName="active-link" key={link.id} exact>{link.text}</NavLink></li>)}
      </ul>
    </nav>
  );
};

export default Navbar;
