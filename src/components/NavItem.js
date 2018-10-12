import React from 'react';

class NavItem extends React.Component {
  render() {
    return <p className="nav-item">{this.props.label}</p>;
  }
}

export default NavItem;
