import React from 'react';
import { Container } from 'reactstrap';
import { connect } from 'react-redux';
import Header from './Header';
import Entries from './Entries';
import { fetchMoods } from '../../actions';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeView: 'Entries',
    };
  }

  componentDidMount() {
    this.props.fetchMoods(this.props.token);
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

const mapStateToProps = (state) => {
  return { token: state.currentUser.token };
};

export default connect(mapStateToProps, { fetchMoods })(HomePage);
