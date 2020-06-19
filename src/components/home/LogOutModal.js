/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { logOut } from '../../actions';

class LogOutModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: false,
    };
  }

  toggle = (logOut = 'yes') => {
    if (logOut === 'yes') {
      this.props.logOut(this.props.token);
    }

    this.setState({ modal: !this.state.modal });
  };

  render() {
    return (
      <div>
        <Button size="sm" color="danger" onClick={this.toggle}>
          {this.props.buttonLabel}
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Log Out</ModalHeader>
          <ModalBody>Are you sure you want to log out?</ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => this.toggle('yes')}>
              Yes
            </Button>{' '}
            <Button color="secondary" onClick={this.toggle}>
              No
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { token: state.currentUser.token };
};

export default connect(mapStateToProps, { logOut })(LogOutModal);
