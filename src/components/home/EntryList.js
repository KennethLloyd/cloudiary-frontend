import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Container, Card, CardBody, Button, Collapse } from 'reactstrap';
import moment from 'moment';
import { fetchEntries } from '../../actions';

const EntryList = props => {
  const addIsOpen = newlyFetchedEntries => {
    const modifiedEntries = newlyFetchedEntries.map(entry => ({
      ...entry,
      isOpen: false
    }));

    return modifiedEntries;
  };

  const [entries, setIsOpen] = useState(addIsOpen(props.entries));

  const toggle = id => {
    const entriesCopy = [...entries];

    entriesCopy.map(entry => {
      if (entry._id === id) {
        entry.isOpen = !entry.isOpen;
      }
    });

    setIsOpen(entriesCopy);
  };

  useEffect(() => {
    const thisMonth = moment(props.date).format('YYYY-MM');
    const nextMonth = moment(props.date)
      .add(1, 'month')
      .format('YYYY-MM');

    props.fetchEntries(props.token, `${thisMonth}-01`, `${nextMonth}-01`);
  }, [props.date]); //upon date change, do this

  useEffect(() => {
    setIsOpen(addIsOpen(props.entries));
  }, [props.entries]); //upon the arrival of new entries from fetch, do this

  return (
    <Container className="mt-3">
      <div id="accordion">
        {entries.map(entry => (
          <Card key={entry._id}>
            <div className="card-header">
              <h5 className="mb-0">
                <Button color="link" onClick={() => toggle(entry._id)}>
                  {entry.title}
                </Button>
              </h5>
            </div>

            <Collapse isOpen={entry.isOpen}>
              <CardBody>{entry.body}</CardBody>
            </Collapse>
          </Card>
        ))}
      </div>
    </Container>
  );
};

const mapStateToProps = state => {
  return { token: state.currentUser.token, entries: state.entries.entries };
};

export default connect(mapStateToProps, { fetchEntries })(EntryList);
