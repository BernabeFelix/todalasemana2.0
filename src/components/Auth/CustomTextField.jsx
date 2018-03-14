import { TextField } from 'material-ui';
import React, { Component } from 'react';
import { bool, func, shape, string } from 'prop-types';

class CustomTextField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      [props.fields.name]: ''
    };
  }

  componentDidMount() {
    const { onValidChange, fields } = this.props;
    // init valid state
    onValidChange({ [fields.name]: false });
  }

  update = ({ target }) => {
    const { value } = target;

    this.setState({ [this.props.fields.name]: value });
  };

  render() {
    const { [this.props.fields.name]: value } = this.state;

    return <TextField {...this.props.fields} onChange={this.update} value={value} />;
  }
}

const Fields = {
  name: string,
  type: string,
  floatingLabelText: string
};

CustomTextField.propTypes = {
  fields: shape(Fields).isRequired,
  onValidChange: func.isRequired,
  shouldValid: bool.isRequired
};

export default CustomTextField;
