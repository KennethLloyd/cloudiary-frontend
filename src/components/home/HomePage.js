import React from 'react';
import { Container } from 'reactstrap';
import Header from './Header';
import Entries from './Entries';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeView: 'Entries',
    };
  }

  changeActiveView = (activeView) => {
    this.setState({ activeView });
    console.log(`Active view is now ${activeView}`);
  };

  render() {
    return (
      <div>
        <Header setActive={this.changeActiveView} />
        <Container fluid>
          <div>{this.state.activeView === 'Entries' ? <Entries /> : ''}</div>
        </Container>
      </div>
    );
  }
}

export default HomePage;
