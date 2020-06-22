import React, { useState } from 'react';
import moment from 'moment';
import EntryNav from './EntryNav';
import SearchFilter from './SearchFilter';
import EntryList from './EntryList';

const Entries = () => {
  const [date, updateDate] = useState(moment().format('MMMM YYYY'));

  return (
    <div>
      <EntryNav date={date} updateDate={updateDate} />
      <SearchFilter />
      <EntryList date={date} />
    </div>
  );
};

export default Entries;
