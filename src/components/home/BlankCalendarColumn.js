import React, { useState } from 'react';
import { Col } from 'reactstrap';
import moment from 'moment';
import AddEntryModal from './AddEntryModal';

const BlankCalendarColumn = (props) => {
  const [modal, setModal] = useState(false);

  const yearAndMonth = moment(props.date).format('YYYY-MM');
  const fullDate = `${yearAndMonth}-${props.day}`;

  const toggle = () => {
    setModal(!modal);
  };

  return (
    <React.Fragment>
      <Col className={props.className} onClick={toggle}>
        {props.day}
      </Col>
      <AddEntryModal modal={modal} setModal={setModal} entryDate={fullDate} />
    </React.Fragment>
  );
};

export default BlankCalendarColumn;
