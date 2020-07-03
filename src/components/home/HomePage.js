import React, { useState, useEffect } from 'react';
import { Container, Alert } from 'reactstrap';
import { connect } from 'react-redux';
import moment from 'moment';
import Header from './Header';
import EntryNav from './EntryNav';
import Entries from './Entries';
import Calendar from './Calendar';
import { fetchMoods } from '../../actions/moodActions';
import { fetchActivities } from '../../actions/activityActions';

const HomePage = (props) => {
  const [activeView, changeActiveView] = useState('Entries');
  const [alertOpen, setAlertOpen] = useState(true);
  const [date, updateDate] = useState(moment().format('YYYY-MM-DD'));

  const greet = () => {
    const time = moment().format('HH:mm');
    const hour = parseInt(time.split(':')[0]);

    if (hour >= 0 && hour < 12) {
      return 'Good morning';
    } else if (hour >= 12 && hour < 18) {
      return 'Good afternoon';
    } else {
      return 'Good evening';
    }
  };

  const closeAlert = () => {
    setAlertOpen(false);
  };

  useEffect(() => {
    props.fetchMoods();
    props.fetchActivities();

    if (alertOpen) {
      const timer = setTimeout(() => {
        setAlertOpen(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div>
      <Header setActive={changeActiveView} />
      <EntryNav date={date} updateDate={updateDate} />
      <Container fluid>
        <div>
          {activeView === 'Entries' ? (
            <Entries date={date} />
          ) : (
            <Calendar date={date} />
          )}
        </div>
        <Alert className="welcome-alert" isOpen={alertOpen} toggle={closeAlert}>
          {`${greet()} ${props.firstName}!`}
        </Alert>
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { firstName: state.currentUser.info.firstName };
};

export default connect(mapStateToProps, { fetchMoods, fetchActivities })(
  HomePage,
);
