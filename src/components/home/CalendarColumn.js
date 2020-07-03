import React from 'react';
import { Col } from 'reactstrap';

const CalendarColumn = (props) => {
  return <Col className={props.className}>{props.day}</Col>;
};

export default CalendarColumn;
