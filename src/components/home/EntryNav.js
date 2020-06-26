import React from 'react';
import { Button } from 'reactstrap';
import moment from 'moment';
import leftArrow from '../../images/left-arrow.svg';
import rightArrow from '../../images/right-arrow.svg';

const EntryNav = (props) => {
  return (
    <div className="d-xs-flex flex-xs-column align-items-xs-center d-md-flex justify-content-md-around align-items-md-center">
      <div className="d-flex align-items-center justify-content-center">
        <Button
          size="sm"
          color="link"
          onClick={() =>
            props.updateDate(
              moment(props.date, 'MMMM YYYY')
                .subtract(1, 'month')
                .format('MMMM YYYY'),
            )
          }
        >
          <img src={leftArrow} alt="left arrow icon" width="20" height="20" />
        </Button>
        <h4 className="mr-5 ml-5 mt-2">{props.date}</h4>
        <Button
          size="sm"
          color="link"
          onClick={() =>
            props.updateDate(
              moment(props.date, 'MMMM YYYY')
                .add(1, 'month')
                .format('MMMM YYYY'),
            )
          }
        >
          <img src={rightArrow} alt="right arrow icon" width="20" height="20" />
        </Button>
      </div>
    </div>
  );
};

export default EntryNav;
