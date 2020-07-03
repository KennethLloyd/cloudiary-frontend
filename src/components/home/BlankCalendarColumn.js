import React from 'react';
import { Col } from 'reactstrap';

const BlankCalendarColumn = (props) => {
  return <Col className={props.className}>{props.day}</Col>;
};

export default BlankCalendarColumn;
