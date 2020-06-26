import React, { useState } from 'react';
import moment from 'moment';
import EntryNav from './EntryNav';
import SearchFilter from './SearchFilter';
import EntryList from './EntryList';
import EntryModal from './EntryModal';

const Entries = () => {
  const [date, updateDate] = useState(moment().format('MMMM YYYY'));
  const [mood, updateMood] = useState('ALL');

  return (
    <div>
      <EntryNav date={date} updateDate={updateDate} />
      <SearchFilter mood={mood} updateMood={updateMood} />
      <EntryList date={date} mood={mood} />
      <EntryModal />
    </div>
  );
};

export default Entries;
