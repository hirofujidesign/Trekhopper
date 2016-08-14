import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

import './map.css';

import Maps from '../../../api/maps.js';
import { Tours } from '../../../api/tours.js';

let maps = new Maps();

export default class Map extends TrackerReact(React.Component) {
  constructor(props) {
    super(props);

    this.state = {
      'map': null,
      'markerNumber': 0

    };
  }

  componentDidMount() {
    let mapData = {
      'component': this,
      'mapSelectorID': 'map',
      'mapOptions': {
        'zoom': this.props.mapZoom,
        'scaleControl': false,
        'scrollwheel': false,
        'disableDoubleClickZoom': true,
        'center': new google.maps.LatLng(40.7128, -74.0059),
        'mapTypeId': google.maps.MapTypeId.HYBRID
      }
    };

    maps.initMap(mapData, (map) => {
      setInterval(() => {
      }, Meteor.settings.public.timeoutRepeat)
    });
  }

  componentWillReceiveProps() {
    let mapData = {
      'component': this,
      'mapSelectorID': 'map',
      'mapOptions': {
        'zoom': this.props.mapZoom,
        'scaleControl': false,
        'scrollwheel': false,
        'disableDoubleClickZoom': true,
        'center': new google.maps.LatLng(40.7128, -74.0059),
        'mapTypeId': google.maps.MapTypeId.HYBRID
      }
    };

    console.log(this.props.tourId, 'tourid in maps');

    if(!this.props.tourId) {
      let locations = ['New York, NY', 'Jersey City, NJ', 'Hoboken, NJ'];
    } else {
      console.log(this.props.tourId, 'tourId');
      let tourDetails = Tours.find({_id: this.props.tourId}).fetch();
      console.log(tourDetails, 'tour details response');
      console.log(tourDetails[0].locations, 'tourdeets.locations');
      let locations = tourDetails[0].locations;

      console.log(locations, 'before initmap');
      maps.initMap(mapData, (map) => {
        setInterval(() => {
        }, Meteor.settings.public.timeoutRepeat)
      }, locations);
    }
  }

  // handleClick(event) {
  //   event.preventDefault()
  // map load code goes here
  // }

  render() {
    return (
      <div>
        <div id="map"></div>
        {/*onClick={this.handleClick.bind(this)}*/}
      </div>
    )
  }
}

Map.propTypes = {
  'mapZoom': React.PropTypes.number
}

Map.defaultProps = {
  'mapZoom': 8
};
