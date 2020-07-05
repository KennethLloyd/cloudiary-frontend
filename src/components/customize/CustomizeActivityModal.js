import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ListGroup,
  ListGroupItem,
  Input,
} from 'reactstrap';
import CustomizeActivity from './CustomizeActivity';

const CustomizeActivityModal = (props) => {
  const [activities, updateActivities] = useState(props.activities);

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

  const renderBody = () => {
    return (
      <div>
        <ListGroup>
          {activities.map((activity) => {
            return (
              <CustomizeActivity
                key={activity._id}
                activity={activity}
                deleteItemFromUI={deleteItemFromUI}
              />
            );
          })}
        </ListGroup>
        <div className="d-flex justify-content-between">
          <Button color="secondary" className="mt-2" onClick={addItem}>
            Add
          </Button>
          <Button color="primary" className="mt-2" onClick={toggle}>
            Finish
          </Button>
        </div>
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
        <ModalBody>{renderBody()}</ModalBody>
      </Modal>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { activities: state.activities.activities };
};

export default connect(mapStateToProps, null)(CustomizeActivityModal);
