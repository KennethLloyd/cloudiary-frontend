import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';
import projectLogo from '../../images/project-logo.svg';
import projectLabel from '../../images/project-label.svg';
import LogOutModal from './LogOutModal';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState('Entries');

  return (
    <div className="shadow bg-white rounded mb-3">
      <Navbar color="primary" light expand="md">
        <NavbarBrand className="mr-5">
          <img src={projectLogo} alt="Project logo" width="60" height="30" />
          <img src={projectLabel} alt="Project label" width="90" height="30" />
        </NavbarBrand>
        <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem className={isActive === 'Entries' ? 'active' : ''}>
              <NavLink
                className="navbar-link"
                onClick={() => {
                  setIsActive('Entries');
                  props.setActive('Entries');
                }}
              >
                Entries
              </NavLink>
            </NavItem>
            <NavItem className={isActive === 'Calendar' ? 'active' : ''}>
              <NavLink
                className="navbar-link"
                onClick={() => {
                  setIsActive('Calendar');
                  props.setActive('Calendar');
                }}
              >
                Calendar
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Customize
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Moods</DropdownItem>
                <DropdownItem>Activities</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>
            <LogOutModal buttonLabel="Log Out" />
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
