import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Alert,
  Badge,
  Container,
  Input,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import InUseMood from './InUseMood';
import { clearErrors } from '../../actions/errorActions';

const CustomizeMoodModal = (props) => {
  const [moods, updateMoods] = useState(props.moods);
  const [selectedIcon, setSelectedIcon] = useState(null);
  const dispatch = useDispatch();

  const availableIcons = [
    'tired',
    'surprise',
    'smile-wink',
    'sad-cry',
    'meh-rolling-eyes',
    'meh-blank',
    'laugh-wink',
    'laugh-squint',
    'laugh-beam',
    'laugh',
    'kiss-wink-heart',
    'kiss-beam',
    'kiss',
    'grin-wink',
    'grin-tongue-wink',
    'grin-tongue-squint',
    'grin-tongue',
    'grin-tears',
    'grin-stars',
    'grin-squint-tears',
    'grin-squint',
    'grin-hearts',
    'grin-beam-sweat',
    'grin-beam',
    'grin-alt',
    'grin',
    'grimace',
    'frown-open',
    'flushed',
    'dizzy',
    'angry',
  ];

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
        <Badge color="secondary" className="ml-3">
          In Use
        </Badge>
        <ul className="d-flex flex-column justify-content-center">
          {moods.map((mood) => {
            return (
              <InUseMood
                key={mood._id}
                mood={mood}
                deleteItemFromUI={deleteItemFromUI}
              />
            );
          })}
        </ul>
        <Badge color="success" className="ml-3">
          Available
        </Badge>
        <Container className="d-flex overflow-auto">
          {availableIcons.map((icon) => {
            return (
              <Button
                color="link"
                className={icon === selectedIcon ? 'bg-success' : ''}
                onClick={() => setSelectedIcon(icon)}
              >
                <FontAwesomeIcon
                  key={icon}
                  icon={icon}
                  className="text-dark"
                  size="2x"
                />
              </Button>
            );
          })}
        </Container>
        {selectedIcon ? (
          <Container className="d-flex align-items-center mt-2 justify-content-center">
            <Input placeholder="Mood name" className="w-50" size="sm"></Input>
            <div>
              <Button
                size="sm"
                color="link"
                className="mr-1 ml-1"
                // onClick={saveActivity}
              >
                <FontAwesomeIcon icon="check" className="text-dark" />
              </Button>
              <Button
                size="sm"
                color="link"
                className="mr-1 ml-1"
                onClick={() => setSelectedIcon(null)}
              >
                <FontAwesomeIcon icon="times" className="text-dark" />
              </Button>
            </div>
          </Container>
        ) : (
          ''
        )}
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
        </ModalBody>
        <ModalFooter className="d-flex justify-content-end">
          <Button color="primary" className="mt-2" onClick={toggle}>
            Finish
          </Button>
        </ModalFooter>
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
