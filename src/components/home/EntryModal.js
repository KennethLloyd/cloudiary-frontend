import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { addEntry } from '../../actions/entryActions';
import newEntryIcon from '../../images/new-entry-icon.svg';

const EntryModal = (props) => {
  const [modal, setModal] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [startTime, setStartTime] = useState(new Date());

  const toggle = () => {
    setModal(!modal);
  };

  const renderHeader = () => {
    return (
      <div className="d-flex justify-content-between align-items-center">
        <p className="new-entry-modal-greetings mb-0">How are you?</p>
        <DatePicker
          selected={startDate}
          onChange={(newDate) => setStartDate(newDate)}
          dateFormat="MMMM d, yyyy"
          className="new-entry-date-picker mr-1"
        />
        <DatePicker
          selected={startTime}
          onChange={(newTime) => setStartTime(newTime)}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={15}
          timeCaption="Time"
          dateFormat="h:mm aa"
          className="new-entry-time-picker ml-1"
        />
      </div>
    );
  };

  return (
    <div className="new-entry-modal">
      <div className="d-flex justify-content-end new-entry-container">
        <Button color="primary" className="new-entry-btn" onClick={toggle}>
          <img src={newEntryIcon} alt="new entry icon" width="25" height="25" />
        </Button>
      </div>
      <Modal size="lg" isOpen={modal} toggle={toggle}>
        <ModalBody>{renderHeader()}</ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Save
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { token: state.currentUser.token };
};

export default connect(mapStateToProps, { addEntry })(EntryModal);
