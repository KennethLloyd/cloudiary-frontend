import React, { useState } from 'react';
import SearchFilter from './SearchFilter';
import EntryList from './EntryList';
import AddEntryModal from './AddEntryModal';

const Entries = (props) => {
  const [mood, updateMood] = useState('ALL');
  const [searchKey, updateSearchKey] = useState('');

  return (
    <div>
      <SearchFilter
        mood={mood}
        updateMood={updateMood}
        updateSearchKey={updateSearchKey}
      />
      <EntryList date={props.date} mood={mood} searchKey={searchKey} />
      <AddEntryModal />
    </div>
  );
};

export default Entries;
