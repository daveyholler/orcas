import React from 'react';
import GoogleMapReact from 'google-map-react';
import { ThemeProvider, Box, Icon } from '@chakra-ui/core';
import OrcaIcon from 'images/orca.png';

export default class Map extends React.Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11,
    height: '240px',
  };

  normalizeCoordinates(coord) {
    if (coord.indexOf(' ') > 0) {
      const split = coord.split(' ');
      const hours = Number(split[0]);
      const minutes = Number(split[1]) / 60;
      const newCoord = hours > 0 ? hours + minutes : hours - minutes;
      console.log(newCoord);
      return newCoord;
    } else {
      return parseFloat(coord);
    }
  }

  render() {
    const { lat, lng, name, height } = this.props
    return (
      <ThemeProvider>
        <Box w="100%" h={height ? height : '400px'} p="4px" overflow="hidden" className="mapWrapper">
          <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyC5HRLOZxeMHh-NqlugX_-RCaHTQf5O7fo' }}
            defaultCenter={{lat: this.normalizeCoordinates(lat), lng: this.normalizeCoordinates(lng)}}
            defaultZoom={11}
            center={{lat: this.normalizeCoordinates(lat), lng: this.normalizeCoordinates(lng)}}
          >
            <img src={OrcaIcon} width="32" height="32" lat={this.normalizeCoordinates(lat)} lng={this.normalizeCoordinates(lng)} />
          </GoogleMapReact>
        </Box>
      </ThemeProvider>
    )
  }
}
