import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Container } from 'reactstrap';
import moment from 'moment';
import Entry from './Entry';
import { fetchEntries } from '../../actions/entryActions';

const EntryList = (props) => {
  const importAll = (r) => {
    let images = {};
    r.keys().map((item) => (images[item.replace('./', '')] = r(item)));
    return images;
  };

  const moodIcons = importAll(
    require.context('../../images/moods', false, /\.(png|jpe?g|svg)$/),
  );

  useEffect(() => {
    const thisMonth = moment(props.date).format('YYYY-MM');
    const nextMonth = moment(props.date).add(1, 'month').format('YYYY-MM');

    props.fetchEntries(`${thisMonth}-01`, `${nextMonth}-01`);
  }, [props.date, props.refetchEntryTrigger]); //upon date change or new entry, refetch entries

  return (
    <Container className="mt-3 entries-container">
      <div id="accordion">
        {props.entries.map((entry) => {
          entry.moodSrc = moodIcons[`${entry.mood.name}.svg`];
          if (props.mood === entry.mood.name || props.mood === 'ALL') {
            return <Entry key={entry._id} content={entry} />;
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
