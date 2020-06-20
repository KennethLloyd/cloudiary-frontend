import React from 'react';
import { Button } from 'reactstrap';

class EntryNav extends React.Component {
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
            onClick={() => this.props.back()}
          >
            Back
          </Button>
          <h4 className="mr-5 ml-5 mt-2">{this.props.currentDate}</h4>
          <Button
            size="sm"
            outline
            color="primary"
            onClick={() => this.props.next()}
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
