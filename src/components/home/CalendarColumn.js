import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import moment from 'moment';
import {
  Button,
  ButtonGroup,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
  Alert,
  Col,
} from 'reactstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import EditEntryModal from './EditEntryModal';
import { editEntry } from '../../actions/entryActions';
import { clearErrors } from '../../actions/errorActions';

const CalendarColumn = (props) => {
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };

  return (
    <React.Fragment>
      <Col className={props.className} onClick={toggle}>
        {props.day}
        <img
          className="align-self-end mb-1"
          src={props.entry.moodSrc}
          width="48"
          height="48"
        />
      </Col>
      <EditEntryModal entry={props.entry} modal={modal} setModal={setModal} />
    </React.Fragment>
  );
};

export default CalendarColumn;
