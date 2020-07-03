import React, { useState } from 'react';
import moment from 'moment';
import { Container, Row, Col } from 'reactstrap';
import EntryNav from './EntryNav';
import CalendarColumn from './CalendarColumn';

const Calendar = (props) => {
  const [date, updateDate] = useState(moment().format('YYYY-MM-DD'));
  const [firstDayOfMonth, updateFirstDayOfMonth] = useState(
    moment(new Date(date)).startOf('month').format('d'),
  );

  let blanks = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    blanks.push(
      <CalendarColumn
        key={`blank-${i}`}
        className="calendar-day empty border border-dark"
        day=""
      />,
    );
  }

  let daysInMonth = [];
  for (let d = 1; d <= moment(new Date(date)).daysInMonth(); d++) {
    daysInMonth.push(
      <CalendarColumn
        key={d}
        className="calendar-day border border-dark"
        day={d}
      />,
    );
  }

  const totalSlots = [...blanks, ...daysInMonth];
  for (let i = totalSlots.length; i < 35; i++) {
    totalSlots.push(
      <CalendarColumn
        key={`blank-${i}`}
        className="calendar-day empty border border-dark"
        day=""
      />,
    );
  }

  const row1 = [];
  const row2 = [];
  const row3 = [];
  const row4 = [];
  const row5 = [];

  totalSlots.map((col, i) => {
    if (i >= 0 && i < 7) {
      row1.push(col);
    } else if (i >= 7 && i < 14) {
      row2.push(col);
    } else if (i >= 14 && i < 21) {
      row3.push(col);
    } else if (i >= 21 && i < 28) {
      row4.push(col);
    } else {
      row5.push(col);
    }
  });

  return (
    <div>
      <EntryNav date={date} updateDate={updateDate} />
      <Container className="bg-light calendar-container">
        <Row className="calendar-header">
          <Col className="border border-dark bg-secondary text-light">
            Sunday
          </Col>
          <Col className="border border-dark bg-secondary text-light">
            Monday
          </Col>
          <Col className="border border-dark bg-secondary text-light">
            Tueday
          </Col>
          <Col className="border border-dark bg-secondary text-light">
            Wednesday
          </Col>
          <Col className="border border-dark bg-secondary text-light">
            Thursday
          </Col>
          <Col className="border border-dark bg-secondary text-light">
            Friday
          </Col>
          <Col className="border border-dark bg-secondary text-light">
            Saturday
          </Col>
        </Row>

        <Row className="calendar-row">
          {row1.map((col) => {
            return col;
          })}
        </Row>
        <Row className="calendar-row">
          {row2.map((col) => {
            return col;
          })}
        </Row>
        <Row className="calendar-row">
          {row3.map((col) => {
            return col;
          })}
        </Row>
        <Row className="calendar-row">
          {row4.map((col) => {
            return col;
          })}
        </Row>
        <Row className="calendar-row">
          {row5.map((col) => {
            return col;
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Calendar;
