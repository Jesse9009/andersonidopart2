import React from 'react';
import NavItem from './NavItem';
import './nav.css';

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <NavItem label="Home" />
        <NavItem label="Our Story" />
        <NavItem label="Wedding Party" />
        <NavItem label="Gallery" />
        <NavItem label="Day of Details" />
        <NavItem label="Accomodations" />
        <NavItem label="Registry" />
      </div>
    );
  }
}

export default Navbar;
