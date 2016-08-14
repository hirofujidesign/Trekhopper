import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import { Tours } from '../../../api/tours.js';

import Tour from './Tour.jsx';
import Map from '../Map/Map.jsx';

export default class AllTours extends TrackerReact(React.Component) {
  constructor() {
    super();
    this.state = {
      subscription: {
        tours: Meteor.subscribe('allTours')
      },
      currentUser: Meteor.userId(),
      currentTourId: ""
    }
  }

  handleClick(event) {
    event.preventDefault();
    this.setState({
      currentTourId: event.target.id
    });
    console.log(event.target.id, 'event target');
  }

  showTours() {
    let turs = Tours.find().fetch();
    return turs
  }

  showMap(tour) {
    tour.preventDefault();
    let locations = tour.target.id;
    if (locations) {
    <Maps tour={locations} />
    }
  }

  handleSubmit(event) {
    event.preventDefault();

    user = this.state.currentUser;
    tourId = event.target.id;
    tourName = event.target.name;

    Materialize.toast('You\'ve signed up for ' + tourName + '!', 2000);

    Meteor.call('tourSignUp', user, tourId);
  }

  render() {
    return (
      <div>
        <div id="tourList">
          <ul>
            {this.showTours().map( (tour) => {
              return (
                <li key={tour._id} className="z-depth-1 tourList">
                  <Tour tour={tour} />
                  <button className='btn grey waves-effect waves-light' onClick={this.handleClick.bind(this)} id={tour._id} >Show Map</button>
                  <form onSubmit={this.handleSubmit.bind(this)} id={tour._id} name={tour.name}>
                    <button className='btn grey waves-effect waves-light' type='submit' >Sign up</button>
                  </form>
                </li>
              )
            })}
          </ul>
        </div>
        <div id="mapDiv">
          <Map tourId={this.state.currentTourId}/>
        </div>
      </div>
    )
  }
}
