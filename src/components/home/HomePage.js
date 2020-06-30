import React, { useState, useEffect } from 'react';
import { Container } from 'reactstrap';
import { connect } from 'react-redux';
import Header from './Header';
import Entries from './Entries';
import { fetchMoods } from '../../actions/moodActions';
import { fetchActivities } from '../../actions/activityActions';

const HomePage = (props) => {
  const [activeView, changeActiveView] = useState('Entries');

  useEffect(() => {
    props.fetchMoods();
    props.fetchActivities();
  }, []);

  return (
    <div>
      <Header setActive={changeActiveView} />
      <Container fluid>
        <div>{activeView === 'Entries' ? <Entries /> : ''}</div>
      </Container>
    </div>
  );
};

export default connect(null, { fetchMoods, fetchActivities })(HomePage);
