import React from 'react';
import { Button } from 'reactstrap';
import moment from 'moment';

class EntryNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: moment().format('MMMM YYYY'),
    };
  }

  goToNextMonth = () => {
    this.setState({
      date: moment(this.state.date, 'MMMM YYYY')
        .add(1, 'month')
        .format('MMMM YYYY'),
    });
  };

  goToLastMonth = () => {
    this.setState({
      date: moment(this.state.date, 'MMMM YYYY')
        .subtract(1, 'month')
        .format('MMMM YYYY'),
    });
  };

  render() {
    return (
      <div className="d-xs-flex flex-xs-column align-items-xs-center d-md-flex justify-content-md-around align-items-md-center">
        <Button size="sm" outline color="primary" className="new-view-all-btn">
          New
        </Button>
        <div className="d-flex align-items-center justify-content-center">
          <Button
            size="sm"
            outline
            color="primary"
            onClick={this.goToLastMonth}
          >
            Back
          </Button>
          <h4 className="mr-5 ml-5 mt-2">{this.state.date}</h4>
          <Button
            size="sm"
            outline
            color="primary"
            onClick={this.goToNextMonth}
          >
            Next
          </Button>
        </div>
        <Button size="sm" outline color="primary" className="new-view-all-btn">
          View All
        </Button>
      </div>
    );
  }
}

export default EntryNav;
