import React from 'react';
import { Link } from 'react-router-dom';

import NavItem from './NavItem';
import { StyledNavbar } from './Styled/styled';
import './nav.css';

class Navbar extends React.Component {
  render() {
    return (
      <StyledNavbar>
        <Link to="/">
          <NavItem label="Home" />
        </Link>
        <Link to="/ourstory">
          <NavItem label="Our Story" />
        </Link>
        {/* <NavItem label="Wedding Party" /> */}
        <Link to="/accommodations">
          <NavItem label="Accommodations" />
        </Link>
        <Link to="/gallery">
          <NavItem label="Gallery" />
        </Link>
        {/* <NavItem label="Day of Details" /> */}
        {/* <NavItem label="Registry" /> */}
      </StyledNavbar>
    );
  }
}

export default Navbar;
