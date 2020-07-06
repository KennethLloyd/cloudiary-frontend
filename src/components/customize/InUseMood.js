import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Input, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { editMood } from '../../actions/moodActions';

const InUseMood = ({ mood, editMood }) => {
  const [name, setName] = useState(mood.name);
  const [icon, setIcon] = useState(mood.icon);
  const [readOnly, setReadOnly] = useState(true);

  const saveMood = () => {
    const moodDetails = {
      name,
      icon,
    };

    editMood(mood._id, moodDetails);
    setReadOnly(!readOnly);
  };

  const exitInput = () => {
    setName(mood.name);
    setIcon(mood.icon);
    setReadOnly(!readOnly);
  };

  return (
    <li className="d-flex justify-content-between align-items-center mt-2 ">
      <FontAwesomeIcon
        icon={icon}
        className="text-primary align-self-start"
        size="2x"
      />
      <Input
        readOnly={readOnly}
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-50"
        bsSize="sm"
      />
      {readOnly ? (
        <div>
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
          <Button
            size="sm"
            color="link"
            className="mr-1 ml-1"
            // onClick={() => deleteActivity(activity._id)}
          >
            <FontAwesomeIcon icon="trash" className="text-dark" />
          </Button>
        </div>
      ) : (
        <div>
          <Button
            size="sm"
            color="link"
            className="mr-1 ml-1"
            onClick={saveMood}
          >
            <FontAwesomeIcon icon="check" className="text-dark" />
          </Button>
          <Button
            size="sm"
            color="link"
            className="mr-1 ml-1"
            onClick={exitInput}
          >
            <FontAwesomeIcon icon="times" className="text-dark" />
          </Button>
        </div>
      )}
    </li>
  );
};

export default connect(null, { editMood })(InUseMood);
