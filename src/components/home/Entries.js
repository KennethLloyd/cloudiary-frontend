import React, { useState } from 'react';
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SearchFilter from './SearchFilter';
import EntryList from './EntryList';
import AddEntryModal from './AddEntryModal';

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
          color="primary"
          className="modal-entry-btn shadow-lg"
          onClick={toggleAddModal}
        >
          <FontAwesomeIcon icon="plus" className="text-light" size="lg" />
        </Button>
      </div>
      <AddEntryModal modal={addModal} setModal={setAddModal} />
    </div>
  );
};

export default Entries;
