import React, { useState } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { deleteEntry } from '../../actions/entryActions';

const DeleteEntryModal = (props) => {
  const [modal, setModal] = useState(false);

  const toggle = (confirm) => {
    if (confirm === 'yes') {
      props.deleteEntry(props.entry._id);
    }

    setModal(!modal);
  };

  return (
    <div>
      <Button size="sm" color="link" className="mr-1 ml-1" onClick={toggle}>
        <FontAwesomeIcon icon="trash" className="text-dark" />
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={props.className}>
        <ModalHeader toggle={toggle}>
          {`${moment(props.entry.entryDate).format('MMMM DD, YYYY')} - ${
            props.entry.title
          }`}
        </ModalHeader>
        <ModalBody>Are you sure you want to delete this entry?</ModalBody>
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

export default connect(null, { deleteEntry })(DeleteEntryModal);
