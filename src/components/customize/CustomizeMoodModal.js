import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Alert,
  Badge,
} from 'reactstrap';
import ModifyInUseMoods from './ModifyInUseMoods';
import { clearErrors } from '../../actions/errorActions';

const CustomizeMoodModal = (props) => {
  const [moods, updateMoods] = useState(props.moods);
  const dispatch = useDispatch();

  useEffect(() => {
    updateMoods(props.moods);
  }, [props.moods]);

  const toggle = () => {
    props.setMoodModal(!props.moodModal);
  };

  const addItem = () => {
    const newItem = {
      _id: new Date().getTime(),
      name: '',
      new: true,
    };

    updateMoods([...moods, newItem]);
  };

  const deleteItemFromUI = (moodId) => {
    const remainingItems = moods.filter((mood) => mood._id !== moodId);

    updateMoods(remainingItems);
  };

  const onAlertDismiss = () => {
    dispatch(clearErrors());
  };

  const renderBody = () => {
    return (
      <div>
        <Badge color="secondary" className="ml-4">
          In Use
        </Badge>
        <ul className="d-flex flex-column justify-content-center">
          {moods.map((mood) => {
            return (
              <ModifyInUseMoods
                key={mood._id}
                mood={mood}
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
        isOpen={props.moodModal}
        toggle={toggle}
        className={props.className}
      >
        <ModalHeader toggle={toggle}>Customize Moods</ModalHeader>
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
            <Button color="primary" className="mt-2" onClick={toggle}>
              Finish
            </Button>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    moods: state.moods.moods,
    error: state.errors.error,
    hasError: state.errors.isOpen,
  };
};

export default connect(mapStateToProps, null)(CustomizeMoodModal);
