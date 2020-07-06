import React, { useState } from 'react';
import { Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import EditEntryModal from './EditEntryModal';

const CalendarColumn = ({ entry, className, day }) => {
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };

  if (!entry.mood) {
    entry.mood = {
      _id: new Date().getTime(),
      name: 'unknown',
      icon: 'question-circle',
    };
  }

  return (
    <React.Fragment>
      <Col className={className} onClick={toggle}>
        {day}

        <FontAwesomeIcon
          icon={entry.mood.icon}
          className="text-light align-self-md-end align-self-xs-center mb-1 calendar-mood"
          size="3x"
        />
      </Col>
      <EditEntryModal entry={entry} modal={modal} setModal={setModal} />
    </React.Fragment>
  );
};

export default CalendarColumn;
