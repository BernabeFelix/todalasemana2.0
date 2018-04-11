import React, { Component } from 'react';
import { func } from 'prop-types';

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

  setRef = element => {
    this.searchBoxRef = element;
  };

  render() {
    return <input ref={this.setRef} type="text" />;
  }
}

SearchBox.propTypes = {
  onPlacesChanged: func.isRequired
};

export default SearchBox;
