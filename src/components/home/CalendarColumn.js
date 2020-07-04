import React, { useState } from 'react';
import { Col } from 'reactstrap';
import EditEntryModal from './EditEntryModal';

const CalendarColumn = (props) => {
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };

  return (
    <React.Fragment>
      <Col className={props.className} onClick={toggle}>
        {props.day}
        <img
          className="align-self-end mb-1"
          src={props.entry.moodSrc}
          width="48"
          height="48"
        />
      </Col>
      <EditEntryModal entry={props.entry} modal={modal} setModal={setModal} />
    </React.Fragment>
  );
};

export default CalendarColumn;
