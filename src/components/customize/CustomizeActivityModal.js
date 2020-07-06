import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, Alert } from 'reactstrap';
import CustomizeActivity from './CustomizeActivity';
import { clearErrors } from '../../actions/errorActions';

const CustomizeActivityModal = (props) => {
  const [activities, updateActivities] = useState(props.activities);
  const dispatch = useDispatch();

  useEffect(() => {
    updateActivities(props.activities);
  }, [props.activities]);

  const toggle = () => {
    props.setActivityModal(!props.activityModal);
  };

  const addItem = () => {
    const newItem = {
      _id: new Date().getTime(),
      name: '',
      new: true,
    };

    updateActivities([...activities, newItem]);
  };

  const deleteItemFromUI = (activityId) => {
    const remainingItems = activities.filter(
      (activity) => activity._id !== activityId,
    );

    updateActivities(remainingItems);
  };

  const onAlertDismiss = () => {
    dispatch(clearErrors());
  };

  const renderBody = () => {
    return (
      <div>
        <ul className="d-flex flex-column justify-content-center">
          {activities.map((activity) => {
            return (
              <CustomizeActivity
                key={activity._id}
                activity={activity}
                deleteItemFromUI={deleteItemFromUI}
              />
            );
          })}
        </ul>
      </div>
    );
  };

  return (
    <div>
      <Modal
        isOpen={props.activityModal}
        toggle={toggle}
        className={props.className}
      >
        <ModalHeader toggle={toggle}>Customize Activities</ModalHeader>
        <ModalBody>
          {renderBody()}
          <Alert
            className="mt-2"
            color="danger"
            isOpen={props.hasError}
            toggle={onAlertDismiss}
          >
            {props.error}
          </Alert>
          <div className="d-flex justify-content-end">
            <Button color="secondary" className="mt-2" onClick={addItem}>
              Add
            </Button>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    activities: state.activities.activities,
    error: state.errors.error,
    hasError: state.errors.isOpen,
  };
};

export default connect(mapStateToProps, null)(CustomizeActivityModal);
