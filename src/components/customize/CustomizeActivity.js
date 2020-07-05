import React, { useState } from 'react';
import { ListGroupItem, Input, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CustomizeActivity = ({ activity }) => {
  const [readOnly, setReadOnly] = useState(true);

  return (
    <ListGroupItem className="d-flex">
      <Input defaultValue={activity.name} readOnly={readOnly} />
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
          onClick={() => {
            setReadOnly(!readOnly);
          }}
        >
          <FontAwesomeIcon icon="times" className="text-dark" />
        </Button>
      )}
    </ListGroupItem>
  );
};

export default CustomizeActivity;
