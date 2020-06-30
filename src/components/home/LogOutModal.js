import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { logOut } from '../../actions/userActions';

const LogOutModal = (props) => {
  const [modal, setModal] = useState(false);

  const toggle = (logOut) => {
    if (logOut === 'yes') {
      props.logOut();
    }

    setModal(!modal);
  };

  return (
    <div>
      <Button size="sm" color="secondary" onClick={toggle}>
        {props.buttonLabel}
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={props.className}>
        <ModalHeader toggle={toggle}>Log Out</ModalHeader>
        <ModalBody>Are you sure you want to log out?</ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            No
          </Button>
          <Button color="primary" onClick={() => toggle('yes')}>
            Yes
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default connect(null, { logOut })(LogOutModal);
