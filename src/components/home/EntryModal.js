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
  const [selectedMood, setSelectedMood] = useState('');

  const toggle = () => {
    setModal(!modal);
  };

  const importAll = (r) => {
    let images = {};
    r.keys().map((item) => (images[item.replace('./', '')] = r(item)));
    return images;
  };

  const moodIcons = importAll(
    require.context('../../images/moods', false, /\.(png|jpe?g|svg)$/),
  );

  const renderHeader = () => {
    return (
      <div className="d-flex justify-content-between align-items-center new-entry-header">
        <p className="new-entry-modal-greetings mb-0">How are you?</p>
        <div className="new-entry-date-picker-container">
          <DatePicker
            selected={startDate}
            onChange={(newDate) => setStartDate(newDate)}
            dateFormat="MMMM d, yyyy"
            className="new-entry-date-picker mr-md-1"
          />
        </div>
        <div className="new-entry-time-picker-container">
          <DatePicker
            selected={startTime}
            onChange={(newTime) => setStartTime(newTime)}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={15}
            timeCaption="Time"
            dateFormat="h:mm aa"
            className="new-entry-time-picker ml-md-1"
          />
        </div>
      </div>
    );
  };

  const renderMoodSelection = () => {
    return (
      <div className="mt-2 d-flex justify-content-center new-entry-mood-container">
        {props.moods.map((mood) => {
          return (
            <div className="mood-selector-container">
              <Button
                className={`mood-selector-btn ${
                  selectedMood === mood.name ? 'border border-dark' : ''
                }`}
                color="link"
                onClick={() => setSelectedMood(mood.name)}
              >
                <img
                  src={moodIcons[`${mood.name}.svg`]}
                  width="70"
                  height="70"
                  alt="mood icon"
                />
                <p className="text-dark mood-selector-label">
                  {mood.name.toUpperCase()}
                </p>
              </Button>
            </div>
          );
        })}
      </div>
    );
  };

  const renderActivitySelection = () => {};

  return (
    <div className="new-entry-modal">
      <div className="d-flex justify-content-end new-entry-container">
        <Button color="primary" className="new-entry-btn" onClick={toggle}>
          <img src={newEntryIcon} alt="new entry icon" width="25" height="25" />
        </Button>
      </div>
      <Modal size="lg" isOpen={modal} toggle={toggle}>
        <ModalBody>
          {renderHeader()}
          {renderMoodSelection()}
          {renderActivitySelection()}
        </ModalBody>
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
  return { token: state.currentUser.token, moods: state.moods.moods };
};

export default connect(mapStateToProps, { addEntry })(EntryModal);
