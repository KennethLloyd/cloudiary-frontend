import React from 'react';
import EntryNav from './EntryNav';
import moment from 'moment';

class Entries extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: moment().format('MMMM YYYY'),
    };
  }

  goToNextMonth = () => {
    this.setState({
      date: moment(this.state.date, 'MMMM YYYY')
        .add(1, 'month')
        .format('MMMM YYYY'),
    });
  };

  goToLastMonth = () => {
    this.setState({
      date: moment(this.state.date, 'MMMM YYYY')
        .subtract(1, 'month')
        .format('MMMM YYYY'),
    });
  };

  render() {
    return (
      <div>
        <EntryNav
          currentDate={this.state.date}
          back={this.goToLastMonth}
          next={this.goToNextMonth}
        />
      </div>
    );
  }
}

export default Entries;
