import React, { useState } from 'react';
import { ListGroupItem, Input, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CustomizeActivity = ({ activity, deleteItemFromUI }) => {
  const [name, setName] = useState(activity.name);
  const [readOnly, setReadOnly] = useState(activity.new ? false : true);

  const exitInput = () => {
    if (activity.new && name === '') {
      deleteItemFromUI(activity._id);
    } else {
      setReadOnly(!readOnly);
    }
  };

  return (
    <ListGroupItem className="d-flex">
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
        <Button size="sm" color="link" className="mr-1 ml-1">
          <FontAwesomeIcon icon="check" className="text-dark" />
        </Button>
      )}

      {readOnly ? (
        <Button size="sm" color="link" className="mr-1 ml-1">
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
    </ListGroupItem>
  );
};

export default CustomizeActivity;
