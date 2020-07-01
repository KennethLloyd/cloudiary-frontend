import React, { useState } from 'react';
import moment from 'moment';
import EntryNav from './EntryNav';
import SearchFilter from './SearchFilter';
import EntryList from './EntryList';
import AddEntryModal from './AddEntryModal';

const Entries = () => {
  const [date, updateDate] = useState(moment().format('YYYY-MM-DD'));
  const [mood, updateMood] = useState('ALL');
  const [searchKey, updateSearchKey] = useState('');

  return (
    <div>
      <EntryNav date={date} updateDate={updateDate} />
      <SearchFilter
        mood={mood}
        updateMood={updateMood}
        updateSearchKey={updateSearchKey}
      />
      <EntryList date={date} mood={mood} searchKey={searchKey} />
      <AddEntryModal />
    </div>
  );
};

export default Entries;
