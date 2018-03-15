import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import { bool, string, element, func } from 'prop-types';
// import RaisedButton from 'material-ui/RaisedButton';

/**
 * Dialog with action buttons. The actions are passed in as an array of React objects,
 * in this example [FlatButtons](/#/components/flat-button).
 *
 * You can also close this dialog by clicking outside the dialog, or with the 'Esc' key.
 */

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
