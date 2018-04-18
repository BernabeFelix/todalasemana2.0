import { Component } from 'react';
import { func } from 'prop-types';

class UserLocation extends Component {
  static options = {
    maximumAge: 0
  };

  state = {
    location: ''
  };

  componentDidMount() {
    if (window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(
        this.saveLocation,
        null,
        UserLocation.options
      );

      this.initWatcher();
    }
  }

  componentWillUnmount() {
    window.navigator.geolocation.clearWatch(this.watcher);
  }

  initWatcher = () => {
    this.watcher = window.navigator.geolocation.getCurrentPosition(
      this.saveLocation
    );
  };

  saveLocation = ({ coords }) => {
    const { latitude, longitude } = coords;

    this.setState({
      location: {
        lat: latitude,
        lng: longitude
      }
    });
  };

  render() {
    const { location } = this.state;

    return this.props.children(location);
  }
}

UserLocation.propTypes = {
  children: func.isRequired
};

export default UserLocation;
