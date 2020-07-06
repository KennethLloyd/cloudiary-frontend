import React, { useState } from 'react';
import { Input, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AvailableMood = ({ icon }) => {
  const [name, setName] = useState('');
  const [editing, setEditing] = useState(false);

  return (
    <li className="d-flex justify-content-between align-items-start mt-2 ">
      <FontAwesomeIcon
        icon={icon}
        className="text-dark align-self-center"
        size="2x"
      />
      {editing ? (
        <div className="d-flex">
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-50"
            bsSize="sm"
          />
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
              onClick={() => setEditing(false)}
            >
              <FontAwesomeIcon icon="times" className="text-dark" />
            </Button>
          </div>
        </div>
      ) : (
        <Button size="sm" className="ml-2" onClick={() => setEditing(true)}>
          Use
        </Button>
      )}
    </li>
  );
};

export default AvailableMood;
