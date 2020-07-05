import React, { useState, useEffect } from 'react';
import { Col, Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import moment from 'moment';
import AddEntryModal from './AddEntryModal';

const CalendarColumnEmpty = (props) => {
  const [modal, setModal] = useState(false);
  const [popoverOpen, setPopoverOpen] = useState(false);
  const yearAndMonth = moment(props.date).format('YYYY-MM');
  const fullDate = `${yearAndMonth}-${props.day}`;

  useEffect(() => {
    const timer = setTimeout(() => {
      setPopoverOpen(false);
    }, 2000);
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

  const toggle = () => {
    setModal(!modal);
  };

  const togglePopOver = () => {
    console.log(fullDate);
    setPopoverOpen(!popoverOpen);
  };

  return (
    <React.Fragment>
      <Col
        className={props.className}
        onClick={toggle}
        id={`calendarCol-${props.day}`}
      >
        {props.day}
      </Col>
      {isValidDate(fullDate) ? (
        <AddEntryModal modal={modal} setModal={setModal} entryDate={fullDate} />
      ) : (
        <Popover
          placement="bottom"
          isOpen={popoverOpen}
          target={`calendarCol-${props.day}`}
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
