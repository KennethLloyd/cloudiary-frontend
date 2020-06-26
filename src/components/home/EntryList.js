import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {
  Container,
  Card,
  CardBody,
  Button,
  Collapse,
  Badge,
  Row,
  Col,
} from 'reactstrap';
import moment from 'moment';
import { fetchEntries } from '../../actions/entryActions';
import upArrowIcon from '../../images/up-arrow.svg';
import downArrowIcon from '../../images/down-arrow.svg';
import pencilIcon from '../../images/pencil-icon.svg';
import trashIcon from '../../images/trash-icon.svg';

const EntryList = (props) => {
  const importAll = (r) => {
    let images = {};
    r.keys().map((item) => (images[item.replace('./', '')] = r(item)));
    return images;
  };

  const moodIcons = importAll(
    require.context('../../images/moods', false, /\.(png|jpe?g|svg)$/),
  );
  console.log(moodIcons);

  const addIsOpen = (newlyFetchedEntries) => {
    if (newlyFetchedEntries) {
      const modifiedEntries = newlyFetchedEntries.map((entry) => ({
        ...entry,
        isOpen: false,
      }));

      return modifiedEntries;
    } else return [];
  };

  const [entries, setIsOpen] = useState(addIsOpen(props.entries));

  const toggle = (id) => {
    const entriesCopy = [...entries];

    entriesCopy.map((entry) => {
      if (entry._id === id) {
        entry.isOpen = !entry.isOpen;
      }
    });

    setIsOpen(entriesCopy);
  };

  useEffect(() => {
    const thisMonth = moment(props.date).format('YYYY-MM');
    const nextMonth = moment(props.date).add(1, 'month').format('YYYY-MM');

    props.fetchEntries(props.token, `${thisMonth}-01`, `${nextMonth}-01`);
  }, [props.date]); //upon date change, do this

  useEffect(() => {
    setIsOpen(addIsOpen(props.entries));
  }, [props.entries]); //upon the arrival of new entries from fetch, do this

  return (
    <Container className="mt-3 entries-container">
      <div id="accordion">
        {entries.map((entry) => {
          if (props.mood === entry.mood.name || props.mood === 'ALL') {
            return (
              <Card key={entry._id}>
                <div
                  className="card-header d-md-flex flex-md-row"
                  onClick={() => toggle(entry._id)}
                >
                  <div className="mood-and-date-section d-md-flex justify-content-md-between">
                    <div className="entry-date d-md-flex flex-md-column align-items-md-center justify-content-md-center">
                      <p className="mb-0">
                        {moment(entry.entryDate).format('MMM DD').toUpperCase()}
                      </p>
                      <p className="entry-day mb-md-0 mt-md-2">
                        {moment(entry.entryDate).format('dddd').toUpperCase()}
                      </p>
                    </div>
                    <div className="entry-mood d-md-flex flex-md-column justify-content-md-center align-items-md-center">
                      <img
                        src={moodIcons[`${entry.mood.name}.svg`]}
                        alt="mood icon"
                        width="48"
                        height="48"
                      />
                      <p className="mb-0 entry-mood-name">
                        {entry.mood.name.toUpperCase()}
                      </p>
                    </div>
                  </div>
                  <h5 className="mb-0 font-weight-bold entry-title align-self-center d-flex justify-content-center">
                    {entry.title}
                  </h5>
                  <div className="time-and-more-section d-md-flex justify-content-md-between">
                    <div className="entry-time align-self-md-center d-md-flex justify-content-md-center">
                      <p className="mb-0">
                        {moment(entry.entryDate).format('LT')}
                      </p>
                    </div>
                    <div className="entry-expander align-self-md-center d-md-flex justify-content-md-center">
                      <Button size="sm" color="link">
                        <img
                          src={entry.isOpen ? upArrowIcon : downArrowIcon}
                          alt="Arrow icon"
                          width="15"
                          height="15"
                        />
                      </Button>
                    </div>
                  </div>
                </div>

                <Collapse isOpen={entry.isOpen}>
                  <CardBody>
                    <Row className="entry-body-header d-flex">
                      <Col className="entry-activities-section d-md-flex flex-md-row d-sm-column flex-sm-column align-items-center justify-content-start mb-4">
                        <p className="mb-0 entry-activities-label">
                          Activities:
                        </p>
                        <div className="entry-activities d-flex mb-0 ml-2">
                          {entry.activities.map((activity) => {
                            return (
                              <Badge
                                key={activity._id}
                                color="primary"
                                className="mr-1 ml-1"
                              >
                                {activity.name}
                              </Badge>
                            );
                          })}
                        </div>
                      </Col>
                      <Col className="modify-entry-section d-flex justify-content-end align-items-center mb-4">
                        <Button size="sm" color="link" className="mr-1 ml-1">
                          <img
                            src={pencilIcon}
                            alt="Pencil icon"
                            width="15"
                            height="15"
                          />
                        </Button>
                        <Button size="sm" color="link" className="mr-1 ml-1">
                          <img
                            src={trashIcon}
                            alt="Trash icon"
                            width="15"
                            height="15"
                          />
                        </Button>
                      </Col>
                    </Row>

                    <div className="entry-body">{entry.body}</div>
                  </CardBody>
                </Collapse>
              </Card>
            );
          }
        })}
      </div>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return { token: state.currentUser.token, entries: state.entries.entries };
};

export default connect(mapStateToProps, { fetchEntries })(EntryList);
