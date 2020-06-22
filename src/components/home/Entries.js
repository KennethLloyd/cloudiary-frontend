import React from 'react';
import moment from 'moment';
import EntryNav from './EntryNav';
import SearchFilter from './SearchFilter';
import EntryList from './EntryList';

class Entries extends React.Component {
  state = {
    date: moment().format('MMMM YYYY')
  };

  updateDate = date => {
    this.setState({ date });
  };

  render() {
    return (
      <div>
        <EntryNav date={this.state.date} updateDate={this.updateDate} />
        <SearchFilter />
        <EntryList date={this.state.date} />
      </div>
    );
  }
}

export default Entries;
