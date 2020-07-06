import React, { useState } from 'react';
import { Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
        <FontAwesomeIcon
          icon={props.entry.mood.icon}
          className="text-secondary align-self-end mb-1 calendar-mood"
          size="3x"
        />
      </Col>
      <EditEntryModal entry={props.entry} modal={modal} setModal={setModal} />
    </React.Fragment>
  );
};

export default CalendarColumn;
