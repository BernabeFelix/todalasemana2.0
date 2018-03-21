import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import { bool, string, element, func } from 'prop-types';

const Modal = props => (
  <div>
    <Dialog
      title={props.title}
      className="modal"
      actions={
        <FlatButton
          label="Cerrar"
          className="modal-close-btn"
          onClick={props.handleClose}
        />
      }
      modal={false}
      open={props.open}
      onRequestClose={props.handleClose}
      autoDetectWindowHeight
      autoScrollBodyContent
    >
      {props.children}
    </Dialog>
  </div>
);

Modal.propTypes = {
  open: bool.isRequired,
  title: string.isRequired,
  children: element.isRequired,
  handleClose: func.isRequired
};

export default Modal;
