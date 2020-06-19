import React from 'react';
import { Container } from 'reactstrap';
import Header from './Header';

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
        <main>
          <div>Date Header</div>
        </main>
      </div>
    );
  }
}

export default HomePage;
