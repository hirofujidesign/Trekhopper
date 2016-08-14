import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

import { Tours } from './tours.js';

export default class Maps {
  initMap(options, callback, locations) {
    if (!_.isObject(options)) {
      console.warn("initMap method needs an object in order to work");
      return;
    };

    let map = new google.maps.Map(document.getElementById(options.mapSelectorID), options.mapOptions);

    if (options.component) {
      options.component.setState({
        'map': map
      })
    };

    if(locations) {

      var directionsService = new google.maps.DirectionsService;
      var directionsDisplay = new google.maps.DirectionsRenderer;

      directionsDisplay.setMap(map);

      this.calculateAndDisplayRoute(directionsService, directionsDisplay, locations);
    }

    return typeof callback === 'function' && callback(map);
  }

  calculateAndDisplayRoute(directionsService, directionsDisplay, locations) {

    console.log(locations, 'calculate method')
    var waypts = [];
    for (var i = 1; i < locations.length - 1; i++) {
      if (locations[i]) {
        waypts.push({
          location: locations[i],
          stopover: true
        });
      }
    }

    directionsService.route({
      origin: locations[0],
      destination: locations[locations.length - 1],
      waypoints: waypts,
      optimizeWaypoints: true,
      travelMode: google.maps.TravelMode.WALKING
    }, function(response, status) {
      if (status === google.maps.DirectionsStatus.OK) {
        directionsDisplay.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }
}
