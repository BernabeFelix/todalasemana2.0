import React, { Component } from 'react';
import { func } from 'prop-types';
import { TextField } from 'material-ui';
import CustomTextField from '../Auth/CustomFormField/CustomTextField';
import CustomField from '../Auth/CustomFormField/CustomField';

class SearchBox extends Component {
  componentDidMount() {
    // Create the search box and link it to the UI element.
    const input = this.searchBoxRef;

    this.searchBox = new window.google.maps.places.SearchBox(input);
    this.searchBox.addListener('places_changed', this.onPlacesChanged);
  }

  componentWillUnmount() {
    // https://developers.google.com/maps/documentation/javascript/events#removing
    window.google.maps.event.clearInstanceListeners(this.searchBox);
  }

  onPlacesChanged = () => {
    const { onPlacesChanged } = this.props;

    if (onPlacesChanged) {
      onPlacesChanged(this.searchBox.getPlaces());
    }
  };

  setRef = () => {
    // Have to do this because
    const DOMInput = document.querySelector('#custom-search-box');
    console.log(DOMInput);

    this.searchBoxRef = DOMInput;
  };

  render() {
    const { multiLine, maxLength, ...props } = this.props;

    // This is a copy from CustomTextField.jsx
    // Have to do this becuase id was not passed from CustomTextField to TextField
    //  todo: search for a better way to do this
    return (
      <CustomField {...props}>
        {({ controlFields, errorText, updateValue }) => (
          <TextField
            {...controlFields}
            placeholder=""
            id="custom-search-box"
            ref={this.setRef}
            errorText={errorText}
            multiLine={multiLine}
            maxLength={maxLength}
            onChange={updateValue}
            readOnly={props.readOnly}
            autocomplete='off'
          />
        )}
      </CustomField>
    );
  }
}

SearchBox.propTypes = {
  onPlacesChanged: func.isRequired,
  ...CustomTextField.propTypes
};

export default SearchBox;
