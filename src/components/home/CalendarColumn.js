import React from 'react';
import { Col } from 'reactstrap';

const CalendarColumn = (props) => {
  return (
    <Col className={`${props.className} ${props.entry ? 'bg-success' : ''}`}>
      {props.day}
      {props.entry ? (
        <img
          className="align-self-end mb-1"
          src={props.entry.moodSrc}
          width="48"
          height="48"
        />
      ) : (
        ''
      )}
    </Col>
  );
};

export default CalendarColumn;
