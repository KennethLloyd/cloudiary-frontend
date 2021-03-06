import React from 'react';
import { Button } from 'reactstrap';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const EntryNav = (props) => {
  const formatDate = (date) => {
    return moment(date, 'YYYY-MM-DD').format('MMMM YYYY');
  };

  return (
    <div className="d-xs-flex flex-xs-column align-items-xs-center d-md-flex justify-content-md-around align-items-md-center">
      <div className="d-flex align-items-center justify-content-center">
        <Button
          size="sm"
          color="link"
          onClick={() =>
            props.updateDate(
              moment(props.date, 'YYYY-MM-DD')
                .subtract(1, 'month')
                .format('YYYY-MM-DD'),
            )
          }
        >
          <FontAwesomeIcon
            icon="chevron-down"
            className="text-dark"
            rotation={90}
            size="lg"
          />
        </Button>
        <h4 className="mr-5 ml-5 mt-2">{formatDate(props.date)}</h4>
        <Button
          size="sm"
          color="link"
          onClick={() =>
            props.updateDate(
              moment(props.date, 'YYYY-MM-DD')
                .add(1, 'month')
                .format('YYYY-MM-DD'),
            )
          }
        >
          <FontAwesomeIcon
            icon="chevron-down"
            className="text-dark"
            rotation={270}
            size="lg"
          />
        </Button>
      </div>
    </div>
  );
};

export default EntryNav;
