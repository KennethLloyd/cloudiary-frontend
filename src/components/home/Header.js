import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="shadow bg-white rounded">
      <Navbar color="light" light expand="md">
        <NavbarBrand className="mr-5">
          <Link to="/home">
            <img src={projectLogo} alt="Project logo" width="60" height="30" />
            <img
              src={projectLabel}
              alt="Project label"
              width="90"
              height="30"
            />
          </Link>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem active>
              <NavLink href="/components/">Entries</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">Calendar</NavLink>
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
          <NavbarText>Log out</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
