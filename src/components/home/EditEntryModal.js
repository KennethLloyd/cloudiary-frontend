import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
  Alert,
} from 'reactstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { editEntry } from '../../actions/entryActions';
import { clearErrors, setError } from '../../actions/errorActions';

const EditEntryModal = (props) => {
  const [startDate, setStartDate] = useState(
    new Date(moment(props.entry.entryDate)),
  );
  const [startTime, setStartTime] = useState(
    new Date(moment(props.entry.entryDate)),
  );
  const [selectedMood, setSelectedMood] = useState(props.entry.mood._id);
  const [selectedActivity, setSelectedActivity] = useState(
    props.entry.activities.map((item) => item._id),
  );
  const [title, setTitle] = useState(props.entry.title);
  const [body, setBody] = useState(props.entry.body);

  const dispatch = useDispatch();

  const onAlertDismiss = () => {
    dispatch(clearErrors());
  };

  const toggle = () => {
    props.setModal(!props.modal);
    dispatch(clearErrors());
  };

  const resetEntry = () => {
    setStartDate(new Date(moment(props.entry.entryDate)));
    setStartTime(new Date(moment(props.entry.entryDate)));
    setSelectedMood(props.entry.mood._id);
    setSelectedActivity(props.entry.activities.map((item) => item._id));
    setTitle(props.entry.title);
    setBody(props.entry.body);

    onAlertDismiss();
  };

  const resetModal = () => {
    resetEntry();
    props.setModal(false);
  };

  useEffect(() => {
    resetModal();
  }, [props.refetchEntryTrigger, props.entry]);

  const onCheckboxBtnClick = (selected) => {
    const index = selectedActivity.indexOf(selected);
    if (index < 0) {
      selectedActivity.push(selected);
    } else {
      selectedActivity.splice(index, 1);
    }
    setSelectedActivity([...selectedActivity]);
  };

  const renderHeader = () => {
    return (
      <div className="d-flex justify-content-between align-items-center modal-entry-header">
        <p className="modal-entry-modal-greetings mb-0 text-light">
          How are you?
        </p>
        <div className="modal-entry-date-picker-container">
          <DatePicker
            selected={startDate}
            filterDate={(date) => {
              return moment() > date;
            }}
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
      <div className="mt-2 d-flex flex-wrap justify-content-center modal-entry-mood-container">
        {props.moods.map((mood, index) => {
          if (selectedMood === '' && !index) setSelectedMood(mood._id);

          return (
            <div className="mood-selector-container" key={mood._id}>
              <Button
                className={`mood-selector-btn ${
                  selectedMood === mood._id ? 'selected-mood' : ''
                }`}
                color="link"
                onClick={() => setSelectedMood(mood._id)}
              >
                <FontAwesomeIcon
                  icon={mood.icon}
                  className={
                    selectedMood === mood._id ? 'text-light' : 'text-primary'
                  }
                  size="3x"
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
        <div className="activity-btns">
          {props.activities.map((activity) => {
            return (
              <Button
                className="mr-1 text-dark"
                key={activity._id}
                outline
                color="success"
                onClick={() => onCheckboxBtnClick(activity._id)}
                active={selectedActivity.includes(activity._id)}
              >
                {activity.name}
              </Button>
            );
          })}
        </div>
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
    if (selectedMood.startsWith('unknown')) {
      dispatch(setError('Please select a mood'));
    } else {
      const entryDetails = {
        entryDate: `${moment(startDate).format('YYYY-MM-DD')} ${moment(
          startTime,
        ).format('HH:mm')}`,
        title,
        body,
        mood: selectedMood,
        activities: selectedActivity,
      };

      props.editEntry(props.entry._id, entryDetails);
    }
  };

  return (
    <div className="edit-entry-modal">
      {props.modal ? (
        <Modal size="lg" isOpen={props.modal} toggle={toggle}>
          <ModalHeader className="bg-primary shadow-sm" toggle={toggle}>
            {renderHeader()}
          </ModalHeader>
          <ModalBody>
            {renderMoodSelection()}
            {renderActivitySelection()}
            {renderContentForm()}
            <Alert
              color="danger"
              isOpen={props.hasError}
              toggle={onAlertDismiss}
            >
              {props.error}
            </Alert>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={resetEntry}>
              Reset
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
    moods: state.moods.moods,
    activities: state.activities.activities,
    refetchEntryTrigger: state.entries.refetchEntryTrigger,
    error: state.errors.error,
    hasError: state.errors.isOpen,
  };
};

export default connect(mapStateToProps, { editEntry })(EditEntryModal);
