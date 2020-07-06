import React, { useState } from 'react';
import { Input, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ModifyInUseMoods = ({ mood }) => {
  const [name, setName] = useState(mood.name);
  const [icon, setIcon] = useState(mood.icon);
  const [readOnly, setReadOnly] = useState(true);

  const exitInput = () => {
    setName(mood.name);
    setIcon(mood.icon);
    setReadOnly(!readOnly);
  };

  return (
    <li className="d-flex justify-content-between align-items-center mt-2 ">
      <FontAwesomeIcon
        icon={icon}
        className="text-dark align-self-start"
        size="2x"
      />
      <Input
        readOnly={readOnly}
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-50"
        size="sm"
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
            // onClick={saveActivity}
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

export default ModifyInUseMoods;
