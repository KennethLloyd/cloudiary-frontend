import React, { useState } from 'react';
import moment from 'moment';
import { Button}  from 'reactstrap';
import EntryNav from './EntryNav';
import SearchFilter from './SearchFilter';
import EntryList from './EntryList';
import newEntryIcon from '../../images/new-entry-icon.svg';

const Entries = () => {
  const [date, updateDate] = useState(moment().format('MMMM YYYY'));
  const [mood, updateMood] = useState('ALL');

  return (
    <div>
      <EntryNav date={date} updateDate={updateDate} />
      <SearchFilter mood={mood} updateMood={updateMood} />
      <EntryList date={date} mood={mood} />
      <div className="d-flex justify-content-end new-entry-container">
        <Button color="primary" className="new-entry-btn"><img src={newEntryIcon} alt="new entry icon" width="25" height="25" /></Button>
      </div>
    </div>
  );
};

export default Entries;
