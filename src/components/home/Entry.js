import React, { useState } from 'react';
import { Card, CardBody, Button, Collapse, Badge, Row, Col } from 'reactstrap';
import moment from 'moment';
import EditEntryModal from './EditEntryModal';
import DeleteEntryModal from './DeleteEntryModal';
import upArrowIcon from '../../images/up-arrow.svg';
import downArrowIcon from '../../images/down-arrow.svg';
import pencilIcon from '../../images/pencil-icon.svg';

const Entry = ({ content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [editModal, setEditModal] = useState(false);

  const toggleEditModal = () => {
    setEditModal(!editModal);
  };

  return (
    <Card key={content._id}>
      <div
        className="card-header d-md-flex flex-md-row entry-card text-light"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="mood-and-date-section d-md-flex justify-content-md-between">
          <div className="entry-date d-md-flex flex-md-column align-items-md-center justify-content-md-center">
            <p className="mb-0">
              {moment(content.entryDate).format('MMM DD').toUpperCase()}
            </p>
            <p className="entry-day mb-md-0 mt-md-2">
              {moment(content.entryDate).format('dddd').toUpperCase()}
            </p>
          </div>
          <div className="entry-mood d-md-flex flex-md-column justify-content-md-center align-items-md-center">
            <img src={content.moodSrc} alt="mood icon" width="48" height="48" />
            <p className="mb-0 entry-mood-name">
              {content.mood.name.toUpperCase()}
            </p>
          </div>
        </div>
        <h5 className="mb-0 font-weight-bold entry-title align-self-center d-flex justify-content-center">
          {content.title}
        </h5>
        <div className="time-and-more-section d-md-flex justify-content-md-between">
          <div className="entry-time align-self-md-center d-md-flex justify-content-md-center">
            <p className="mb-0">{moment(content.entryDate).format('LT')}</p>
          </div>
          <div className="entry-expander align-self-md-center d-md-flex justify-content-md-center">
            <Button size="sm" color="link">
              <img
                src={isOpen ? upArrowIcon : downArrowIcon}
                alt="Arrow icon"
                width="15"
                height="15"
              />
            </Button>
          </div>
        </div>
      </div>

      <Collapse isOpen={isOpen}>
        <CardBody>
          <Row className="entry-body-header d-flex">
            <Col className="entry-activities-section d-md-flex flex-md-row d-sm-column flex-sm-column align-items-center justify-content-start mb-4">
              <p className="mb-0 entry-activities-label">Activities:</p>
              <div className="entry-activities d-flex mb-0 ml-2">
                {content.activities.map((activity) => {
                  return (
                    <Badge
                      key={activity._id}
                      color="success"
                      className="mr-1 ml-1"
                    >
                      {activity.name}
                    </Badge>
                  );
                })}
              </div>
            </Col>
            <Col className="modify-entry-section d-flex justify-content-end align-items-center mb-4">
              <div
                className="d-flex justify-content-end edit-entry-container"
                onClick={toggleEditModal}
              >
                <Button size="sm" color="link" className="mr-1 ml-1">
                  <img
                    src={pencilIcon}
                    alt="Pencil icon"
                    width="15"
                    height="15"
                  />
                </Button>
              </div>
              <EditEntryModal
                entry={content}
                modal={editModal}
                setModal={setEditModal}
              />
              <DeleteEntryModal entry={content} />
            </Col>
          </Row>

          <div className="entry-body">{content.body}</div>
        </CardBody>
      </Collapse>
    </Card>
  );
};

export default Entry;
