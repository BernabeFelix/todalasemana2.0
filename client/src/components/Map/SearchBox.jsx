import React, { Component } from 'react';
import { TextField } from 'material-ui';
import CustomTextField from '../Auth/CustomFormField/CustomTextField';
import CustomField from '../Auth/CustomFormField/CustomField';

class SearchBox extends Component {
  componentDidMount() {
    // Create the search box and link it to the UI element.
    const input = this.searchBoxRef;

    this.searchBox = new window.google.maps.places.SearchBox(input);
    this.searchBox.addListener('places_changed', this.getSearchBoxPlaces);
  }

  componentWillUnmount() {
    // https://developers.google.com/maps/documentation/javascript/events#removing
    window.google.maps.event.clearInstanceListeners(this.searchBox);
  }

  getSearchBoxPlaces = () => {
    const places = this.searchBox.getPlaces();

    if (places.length) {
      const place = places[0].formatted_address;

      this.updateValue(place);
    }
  };

  setRef = () => {
    // Have to do this because TextField is not the final element
    // This results on a not working search box
    const DOMInput = document.querySelector('#custom-search-box');

    this.searchBoxRef = DOMInput;
  };

  render() {
    const { fullWidth, maxLength, ...props } = this.props;

    // This is a copy from CustomTextField.jsx
    // Have to do this because id was not passed from CustomTextField to TextField
    //  todo: search for a better way to do this
    return (
      <CustomField {...props}>
        {({
          controlFields,
          errorText,
          updateValue,
          value,
          updateDirectValue
        }) => {
          this.updateValue = updateDirectValue;

          return (
            <TextField
              {...controlFields}
              placeholder=""
              ref={this.setRef}
              autoComplete="off"
              id="custom-search-box"
              errorText={errorText}
              maxLength={maxLength}
              onChange={updateValue}
              fullWidth={fullWidth}
              readOnly={props.readOnly}
              value={value}
            />
          );
        }}
      </CustomField>
    );
  }
}

SearchBox.defaultProps = CustomTextField.defaultProps;

SearchBox.propTypes = CustomTextField.propTypes;

export default SearchBox;
