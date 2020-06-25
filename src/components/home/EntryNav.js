import React from 'react';
import { Button } from 'reactstrap';
import moment from 'moment';

const EntryNav = (props) => {
  return (
    <div className="d-xs-flex flex-xs-column align-items-xs-center d-md-flex justify-content-md-around align-items-md-center">
      <div className="d-flex align-items-center justify-content-center">
        <Button
          size="sm"
          outline
          color="primary"
          onClick={() =>
            props.updateDate(
              moment(props.date, 'MMMM YYYY')
                .subtract(1, 'month')
                .format('MMMM YYYY'),
            )
          }
        >
          Back
        </Button>
        <h4 className="mr-5 ml-5 mt-2">{props.date}</h4>
        <Button
          size="sm"
          outline
          color="primary"
          onClick={() =>
            props.updateDate(
              moment(props.date, 'MMMM YYYY')
                .add(1, 'month')
                .format('MMMM YYYY'),
            )
          }
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default EntryNav;
