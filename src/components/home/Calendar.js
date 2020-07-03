import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { Container, Row, Col } from 'reactstrap';
import CalendarColumn from './CalendarColumn';

const Calendar = (props) => {
  const [row1, setRow1] = useState([]);
  const [row2, setRow2] = useState([]);
  const [row3, setRow3] = useState([]);
  const [row4, setRow4] = useState([]);
  const [row5, setRow5] = useState([]);
  const [row6, setRow6] = useState([]);

  useEffect(() => {
    const firstDayOfMonth = moment(new Date(props.date))
      .startOf('month')
      .format('d');

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
    for (let d = 1; d <= moment(new Date(props.date)).daysInMonth(); d++) {
      daysInMonth.push(
        <CalendarColumn
          key={d}
          className="calendar-day border border-dark"
          day={d}
        />,
      );
    }

    const totalSlots = [...blanks, ...daysInMonth];
    for (let i = totalSlots.length; i < 42; i++) {
      totalSlots.push(
        <CalendarColumn
          key={`blank-${i}`}
          className="calendar-day empty border border-dark"
          day=""
        />,
      );
    }

    let firstRow = [];
    let secondRow = [];
    let thirdRow = [];
    let fourthRow = [];
    let fifthRow = [];
    let sixthRow = [];

    totalSlots.map((col, i) => {
      if (i >= 0 && i < 7) {
        firstRow.push(col);
      } else if (i >= 7 && i < 14) {
        secondRow.push(col);
      } else if (i >= 14 && i < 21) {
        thirdRow.push(col);
      } else if (i >= 21 && i < 28) {
        fourthRow.push(col);
      } else if (i >= 28 && i < 35) {
        fifthRow.push(col);
      } else {
        sixthRow.push(col);
      }
    });

    setRow1(firstRow);
    setRow2(secondRow);
    setRow3(thirdRow);
    setRow4(fourthRow);
    setRow5(fifthRow);
    setRow6(sixthRow);
  }, [props.date]);

  return (
    <div>
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
        <Row className="calendar-row">
          {row6.map((col) => {
            return col;
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Calendar;
