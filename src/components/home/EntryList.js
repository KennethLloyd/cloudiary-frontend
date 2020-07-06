import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Container } from 'reactstrap';
import moment from 'moment';
import Entry from './Entry';
import { fetchEntries } from '../../actions/entryActions';

const EntryList = (props) => {
  useEffect(() => {
    const thisMonth = moment(props.date).format('YYYY-MM');
    const nextMonth = moment(props.date).add(1, 'month').format('YYYY-MM');

    props.fetchEntries(`${thisMonth}-01`, `${nextMonth}-01`);
  }, [props.date, props.refetchEntryTrigger]); //upon date change or new entry, refetch entries

  return (
    <Container className="mt-3 entries-container">
      <div id="accordion">
        {props.entries.map((entry) => {
          if (
            props.mood.toLowerCase() === entry.mood.name.toLowerCase() ||
            props.mood.toUpperCase() === 'ALL'
          ) {
            if (
              props.searchKey === '' ||
              entry.body
                .toLowerCase()
                .includes(props.searchKey.toLowerCase()) ||
              entry.title.toLowerCase().includes(props.searchKey.toLowerCase())
            ) {
              return <Entry key={entry._id} content={entry} />;
            }
          } else return '';
        })}
      </div>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    entries: state.entries.entries,
    refetchEntryTrigger: state.entries.refetchEntryTrigger,
  };
};

export default connect(mapStateToProps, { fetchEntries })(EntryList);
