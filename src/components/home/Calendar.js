import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { Container, Row, Col } from 'reactstrap';
import CalendarColumn from './CalendarColumn';
import CalendarColumnEmpty from './CalendarColumnEmpty';
import { fetchEntries } from '../../actions/entryActions';

const Calendar = (props) => {
  const [row1, setRow1] = useState([]);
  const [row2, setRow2] = useState([]);
  const [row3, setRow3] = useState([]);
  const [row4, setRow4] = useState([]);
  const [row5, setRow5] = useState([]);
  const [row6, setRow6] = useState([]);

  const importAll = (r) => {
    let images = {};
    r.keys().map((item) => (images[item.replace('./', '')] = r(item)));
    return images;
  };

  const moodIcons = importAll(
    require.context('../../images/moods', false, /\.(png|jpe?g|svg)$/),
  );

  const getDay = (entryDate) => {
    const dateOnly = entryDate.split(' ')[0];
    const dayOnly = parseInt(dateOnly.split('-')[2]);

    return dayOnly;
  };

  useEffect(() => {
    const thisMonth = moment(props.date).format('YYYY-MM');
    const nextMonth = moment(props.date).add(1, 'month').format('YYYY-MM');

    props.fetchEntries(`${thisMonth}-01`, `${nextMonth}-01`);
  }, [props.date, props.refetchEntryTrigger]);

  useEffect(() => {
    const calendarEntryProps = new Array(31).fill(null);

    props.entries.map((entry) => {
      entry.moodSrc = moodIcons[`${entry.mood.name}-dark.svg`];
      const entryDay = getDay(entry.entryDate);

      calendarEntryProps[entryDay - 1] = entry;
    });

    const firstDayOfMonth = moment(new Date(props.date))
      .startOf('month')
      .format('d');

    let blanks = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
      blanks.push(
        <Col
          key={`blank-${i}`}
          className="calendar-day blank border border-dark"
        />,
      );
    }

    let daysInMonth = [];
    for (let d = 1; d <= moment(new Date(props.date)).daysInMonth(); d++) {
      if (calendarEntryProps[d - 1]) {
        daysInMonth.push(
          <CalendarColumn
            key={d}
            className="calendar-day border border-dark d-flex justify-content-between bg-success"
            day={d}
            entry={calendarEntryProps[d - 1]}
          />,
        );
      } else {
        daysInMonth.push(
          <CalendarColumnEmpty
            key={d}
            className="calendar-day empty border border-dark"
            day={d}
            date={props.date}
          />,
        );
      }
    }

    const totalSlots = [...blanks, ...daysInMonth];
    for (let i = totalSlots.length; i < 42; i++) {
      totalSlots.push(
        <Col
          key={`blank-${i}`}
          className="calendar-day blank border border-dark"
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
  }, [props.entries]);

  return (
    <div>
      <Container className="bg-light calendar-container">
        <Row className="calendar-header calendar-days-complete">
          <Col className="border border-dark bg-secondary text-light text-center">
            Sunday
          </Col>
          <Col className="border border-dark bg-secondary text-light text-center">
            Monday
          </Col>
          <Col className="border border-dark bg-secondary text-light text-center">
            Tueday
          </Col>
          <Col className="border border-dark bg-secondary text-light text-center">
            Wednesday
          </Col>
          <Col className="border border-dark bg-secondary text-light text-center">
            Thursday
          </Col>
          <Col className="border border-dark bg-secondary text-light text-center">
            Friday
          </Col>
          <Col className="border border-dark bg-secondary text-light text-center">
            Saturday
          </Col>
        </Row>

        <Row className="calendar-header calendar-days-shorten">
          <Col className="border border-dark bg-secondary text-light text-center">
            Sun
          </Col>
          <Col className="border border-dark bg-secondary text-light text-center">
            Mon
          </Col>
          <Col className="border border-dark bg-secondary text-light text-center">
            Tue
          </Col>
          <Col className="border border-dark bg-secondary text-light text-center">
            Wed
          </Col>
          <Col className="border border-dark bg-secondary text-light text-center">
            Thu
          </Col>
          <Col className="border border-dark bg-secondary text-light text-center">
            Fri
          </Col>
          <Col className="border border-dark bg-secondary text-light text-center">
            Sat
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

const mapStateToProps = (state) => {
  return {
    entries: state.entries.entries,
    refetchEntryTrigger: state.entries.refetchEntryTrigger,
  };
};

export default connect(mapStateToProps, { fetchEntries })(Calendar);
