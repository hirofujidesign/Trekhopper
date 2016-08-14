import React, {Component} from 'react';
import Map from '../Map/Map.jsx';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

export default class TourSingle extends TrackerReact(React.Component){
  render() {
    return (
      <div key={this.props.tour._id}>
        <div id={this.props.tour._id}>
          <h4>{this.props.tour.name}</h4>
          <p>{this.props.tour.description}</p>
        </div>
      </div>
    )
  }
}
