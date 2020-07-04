import React, { useState, useEffect } from 'react';
import { Col, Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import moment from 'moment';
import AddEntryModal from './AddEntryModal';

const CalendarColumnEmpty = (props) => {
  const [modal, setModal] = useState(false);
  const [popoverOpen, setPopoverOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPopoverOpen(false);
    }, 3000);
    return () => clearTimeout(timer);
  });

  const isValidDate = (date) => {
    if (
      moment(new Date(date)).format('YYYY-MM-DD') >
      moment(new Date()).format('YYYY-MM-DD')
    ) {
      return false;
    }
    return true;
  };

  const togglePopOver = () => setPopoverOpen(!popoverOpen);

  const yearAndMonth = moment(props.date).format('YYYY-MM');
  const fullDate = `${yearAndMonth}-${props.day}`;

  const toggle = () => {
    setModal(!modal);
  };

  return (
    <React.Fragment>
      <Col className={props.className} onClick={toggle} id="calendarCol">
        {props.day}
      </Col>
      {isValidDate(fullDate) ? (
        <AddEntryModal modal={modal} setModal={setModal} entryDate={fullDate} />
      ) : (
        <Popover
          placement="bottom"
          isOpen={popoverOpen}
          target="calendarCol"
          toggle={togglePopOver}
        >
          <PopoverHeader>Add Entry</PopoverHeader>
          <PopoverBody>
            Oops! You cannot add entries for future dates!
          </PopoverBody>
        </Popover>
      )}
    </React.Fragment>
  );
};

export default CalendarColumnEmpty;
