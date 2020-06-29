import React, { useState } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import {
  Button,
  ButtonGroup,
  Modal,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { addEntry } from '../../actions/entryActions';
import newEntryIcon from '../../images/new-entry-icon.svg';

const AddEntryModal = (props) => {
  const [modal, setModal] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [startTime, setStartTime] = useState(new Date());
  const [selectedMood, setSelectedMood] = useState('');
  const [selectedActivity, setSelectedActivity] = useState([]);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const toggle = () => {
    setModal(!modal);
  };

  const clearEntry = () => {
    setStartDate(new Date());
    setStartTime(new Date());
    setSelectedMood('');
    setSelectedActivity([]);
    setTitle('');
    setBody('');
  };

  const resetModal = () => {
    clearEntry();
    setModal(false);
  };

  const onCheckboxBtnClick = (selected) => {
    const index = selectedActivity.indexOf(selected);
    if (index < 0) {
      selectedActivity.push(selected);
    } else {
      selectedActivity.splice(index, 1);
    }
    setSelectedActivity([...selectedActivity]);
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
      <div className="d-flex justify-content-between align-items-center modal-entry-header">
        <p className="modal-entry-modal-greetings mb-0">How are you?</p>
        <div className="modal-entry-date-picker-container">
          <DatePicker
            selected={startDate}
            onChange={(newDate) => setStartDate(newDate)}
            dateFormat="MMMM d, yyyy"
            className="modal-entry-date-picker mr-md-1"
          />
        </div>
        <div className="modal-entry-time-picker-container">
          <DatePicker
            selected={startTime}
            onChange={(newTime) => setStartTime(newTime)}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={15}
            timeCaption="Time"
            dateFormat="h:mm aa"
            className="modal-entry-time-picker ml-md-1"
          />
        </div>
      </div>
    );
  };

  const renderMoodSelection = () => {
    return (
      <div className="mt-2 d-flex justify-content-center modal-entry-mood-container">
        {props.moods.map((mood, index) => {
          if (selectedMood === '' && !index) setSelectedMood(mood._id);

          return (
            <div className="mood-selector-container" key={mood._id}>
              <Button
                className={`mood-selector-btn ${
                  selectedMood === mood._id ? 'border border-dark' : ''
                }`}
                color="link"
                onClick={() => setSelectedMood(mood._id)}
              >
                <img
                  src={moodIcons[`${mood.name}-dark.svg`]}
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

  const renderActivitySelection = () => {
    return (
      <div>
        <p className="mb-1">Activities:</p>
        <ButtonGroup size="sm">
          {props.activities.map((activity) => {
            return (
              <Button
                className="mr-1"
                key={activity._id}
                outline
                color="primary"
                onClick={() => onCheckboxBtnClick(activity._id)}
                active={selectedActivity.includes(activity._id)}
              >
                {activity.name}
              </Button>
            );
          })}
        </ButtonGroup>
      </div>
    );
  };

  const renderContentForm = () => {
    return (
      <Form className="mt-4">
        <FormGroup>
          <Label className="sr-only">Title</Label>
          <Input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label className="sr-only">Body</Label>
          <Input
            type="textarea"
            placeholder="Write something..."
            className="modal-entry-textarea"
            rows="10"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </FormGroup>
      </Form>
    );
  };

  const saveEntry = () => {
    const entryDetails = {
      entryDate: `${moment(startDate).format('YYYY-MM-DD')} ${moment(
        startTime,
      ).format('HH:mm')}`,
      title,
      body,
      mood: selectedMood,
      activities: selectedActivity,
    };

    props.addEntry(props.token, entryDetails);
    resetModal();
  };

  return (
    <div className="modal-entry-modal">
      <div className="d-flex justify-content-end modal-entry-container">
        <Button color="primary" className="modal-entry-btn" onClick={toggle}>
          <img src={newEntryIcon} alt="new entry icon" width="25" height="25" />
        </Button>
      </div>
      {modal ? (
        <Modal size="lg" isOpen={modal} toggle={toggle}>
          <ModalBody>
            {renderHeader()}
            {renderMoodSelection()}
            {renderActivitySelection()}
            {renderContentForm()}
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={clearEntry}>
              Clear
            </Button>
            <Button color="primary" onClick={saveEntry}>
              Save
            </Button>
          </ModalFooter>
        </Modal>
      ) : (
        ''
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.currentUser.token,
    moods: state.moods.moods,
    activities: state.activities.activities,
  };
};

export default connect(mapStateToProps, { addEntry })(AddEntryModal);
