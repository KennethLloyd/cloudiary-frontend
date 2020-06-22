import React, { useState, useEffect } from 'react';
import { Container } from 'reactstrap';
import { connect } from 'react-redux';
import Header from './Header';
import Entries from './Entries';
import { fetchMoods } from '../../actions';

const HomePage = (props) => {
  const [activeView, changeActiveView] = useState('Entries');

  useEffect(() => {
    props.fetchMoods(props.token);
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

const mapStateToProps = (state) => {
  return { token: state.currentUser.token };
};

export default connect(mapStateToProps, { fetchMoods })(HomePage);
