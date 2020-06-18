import React from 'react';
import { Container } from 'reactstrap';
import Header from './Header';
import LogOutModal from './LogOutModal';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeView: 'Entries',
      showLogOutModal: false,
    };
  }

  changeActiveView = (activeView) => {
    this.setState({ activeView });
    console.log(`Active view is now ${activeView}`);
  };

  showLogoutModal = () => {
    this.setState({ showLogOutModal: true });
  };

  render() {
    return (
      <div>
        <Header
          setActive={this.changeActiveView}
          showLogOut={this.showLogoutModal}
        />
        <main>
          <div>Date Header</div>
          <LogOutModal open={this.state.showLogOutModal} />
        </main>
      </div>
    );
  }
}

export default HomePage;
