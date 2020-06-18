import React from 'react';
import Header from './Header';
import { Container } from 'reactstrap';

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Container>HomePage</Container>
      </div>
    );
  }
}

export default HomePage;
