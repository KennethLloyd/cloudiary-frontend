import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Input, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  addActivity,
  editActivity,
  deleteActivity,
} from '../../actions/activityActions';

const CustomizeActivity = ({
  activity,
  deleteItemFromUI,
  addActivity,
  editActivity,
  deleteActivity,
}) => {
  const [name, setName] = useState(activity.name);
  const [readOnly, setReadOnly] = useState(activity.new ? false : true);

  const exitInput = () => {
    if (activity.new) {
      deleteItemFromUI(activity._id);
    } else {
      setName(activity.name);
      setReadOnly(!readOnly);
    }
  };

  const saveActivity = () => {
    const activityDetails = {
      name,
    };

    if (activity.new) {
      if (name === '') deleteItemFromUI(activity._id);
      else {
        addActivity(activityDetails);
      }
    } else if (name === activity.name) {
      setReadOnly(!readOnly);
    } else {
      editActivity(activity._id, activityDetails);
      setReadOnly(!readOnly);
    }
  };

  return (
    <li className="d-flex justify-content-between mt-2 ">
      <Input
        readOnly={readOnly}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {readOnly ? (
        <Button
          size="sm"
          color="link"
          className="mr-1 ml-1"
          onClick={() => {
            setReadOnly(!readOnly);
          }}
        >
          <FontAwesomeIcon icon="pen" className="text-dark" />
        </Button>
      ) : (
        <Button
          size="sm"
          color="link"
          className="mr-1 ml-1"
          onClick={saveActivity}
        >
          <FontAwesomeIcon icon="check" className="text-dark" />
        </Button>
      )}

      {readOnly ? (
        <Button
          size="sm"
          color="link"
          className="mr-1 ml-1"
          onClick={() => deleteActivity(activity._id)}
        >
          <FontAwesomeIcon icon="trash" className="text-dark" />
        </Button>
      ) : (
        <Button
          size="sm"
          color="link"
          className="mr-1 ml-1"
          onClick={exitInput}
        >
          <FontAwesomeIcon icon="times" className="text-dark" />
        </Button>
      )}
    </li>
  );
};

export default connect(null, { addActivity, editActivity, deleteActivity })(
  CustomizeActivity,
);
