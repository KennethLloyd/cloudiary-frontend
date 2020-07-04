import React, { useState } from 'react';
import { Col } from 'reactstrap';
import AddEntryModal from './AddEntryModal';

const BlankCalendarColumn = (props) => {
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };

  return (
    <React.Fragment>
      <Col className={props.className} onClick={toggle}>
        {props.day}
      </Col>
      <AddEntryModal modal={modal} setModal={setModal} />
    </React.Fragment>
  );
};

export default BlankCalendarColumn;
