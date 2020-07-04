import React, { useState } from 'react';
import { Button } from 'reactstrap';
import SearchFilter from './SearchFilter';
import EntryList from './EntryList';
import AddEntryModal from './AddEntryModal';
import newEntryIcon from '../../images/new-entry-icon.svg';

const Entries = (props) => {
  const [mood, updateMood] = useState('ALL');
  const [searchKey, updateSearchKey] = useState('');
  const [addModal, setAddModal] = useState(false);

  const toggleAddModal = () => {
    setAddModal(!addModal);
  };

  return (
    <div>
      <SearchFilter
        mood={mood}
        updateMood={updateMood}
        updateSearchKey={updateSearchKey}
      />
      <EntryList date={props.date} mood={mood} searchKey={searchKey} />
      <div className="d-flex justify-content-end modal-entry-container">
        <Button
          color="secondary"
          className="modal-entry-btn"
          onClick={toggleAddModal}
        >
          <img src={newEntryIcon} alt="new entry icon" width="25" height="25" />
        </Button>
      </div>
      <AddEntryModal modal={addModal} setModal={setAddModal} />
    </div>
  );
};

export default Entries;
