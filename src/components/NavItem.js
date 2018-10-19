import React from 'react';
import { StyledNavItem } from './Styled/styled';

class NavItem extends React.Component {
  render() {
    return <StyledNavItem>{this.props.label}</StyledNavItem>;
  }
}

export default NavItem;
