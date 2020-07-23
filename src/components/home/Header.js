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
import CustomizeActivityModal from '../customize/CustomizeActivityModal';
import CustomizeMoodModal from '../customize/CustomizeMoodModal';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState('Entries');
  const [activityModal, setActivityModal] = useState(false);
  const [moodModal, setMoodModal] = useState(false);

  const toggleActivityModal = () => {
    setActivityModal(!activityModal);
  };

  const toggleMoodModal = () => {
    setMoodModal(!moodModal);
  };

  return (
    <div className="shadow bg-white rounded mb-3">
      <Navbar color="primary" light expand="md">
        <NavbarBrand className="mr-5">
          <img src={projectLogo} alt="Project logo" width="60" height="30" />
          <img
            src={projectLabel}
            alt="Project label"
            width="90"
            height="30"
            className="ml-3"
          />
        </NavbarBrand>
        <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem className={isActive === 'Entries' ? 'active' : ''}>
              <NavLink
                className="navbar-link text-light"
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
                className="navbar-link text-light"
                onClick={() => {
                  setIsActive('Calendar');
                  props.setActive('Calendar');
                }}
              >
                Calendar
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret className="text-light">
                Customize
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem onClick={toggleMoodModal}>Moods</DropdownItem>
                <CustomizeMoodModal
                  moodModal={moodModal}
                  setMoodModal={setMoodModal}
                />
                <DropdownItem onClick={toggleActivityModal}>
                  Activities
                </DropdownItem>
                <CustomizeActivityModal
                  activityModal={activityModal}
                  setActivityModal={setActivityModal}
                />
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
