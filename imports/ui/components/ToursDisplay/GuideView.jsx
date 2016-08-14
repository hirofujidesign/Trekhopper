import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Tours } from '../../../api/tours.js';
import Tour from './Tour.jsx';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

export default class GuideTours extends TrackerReact(React.Component) {

  constructor() {
    super();
    this.state = {
      subscription: {
        tours: Meteor.subscribe('allTours')
      },
      currentUser: Meteor.userId()
    }
  }

  removeTours(tourid) {
    console.log('THIS IS TOURID TO BE DELTED',tourid.target.id);
    Meteor.call('tours.remove',tourid.target.id);
  }

  showTours() {
    myUserId = Meteor.userId();
    var myTours = Tours.find({guideId: myUserId}).fetch()

    console.log('THESE ARE MY TOURS', myTours.length);
    return myTours;
  }

  render() {
    let guidedTours = this.showTours();
    if (guidedTours.length > 0) {
    return (

      <ul>
        {guidedTours.map((tour) => {
          return (

            <li key={tour._id} className="guideList z-depth-1 ">
              <img className="tourPhoto" src={tour.photo}/>
              <Tour tour={tour} />
              <p>{tour.locations}</p>
              <button id="startTourBtn" className="btn grey waves-effect waves-light" type="button">Start Tour</button><br></br>
              <button onClick={this.removeTours.bind(this)} id={tour._id} className="btn grey waves-effect waves-light" type="button">Remove Tour</button>

            </li>


          )
        })}
        </ul>

    )
   }
   else {
    return (
     <div id="noToursMsg">
          <h3>You havent's created any tours yet!</h3>
          <h5>Click <a href="/maketour">Here</a> to create some tours!</h5>
        </div>
    )
   }
  }
}



{/* ----PREVIOIS GUIDEVIEW--
import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Tours } from '../../../api/tours.js';
import Tour from './Tour.jsx';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

export default class GuideTours extends TrackerReact(React.Component) {
  constructor() {
    super();
    this.state = {
      subscription: {
        tours: Meteor.subscribe('allTours')
      },
      currentUser: Meteor.userId()
    }
  }

  showTours() {
    myUserId = Meteor.userId();
    var myTours = Tours.find({guideId: myUserId}).fetch()

    console.log('THESE ARE MY TOURS', myTours);
    return myTours;
  }

  render() {
    return (
      <ul>
        {this.showTours().map( (tour) => {
          return (
            <li key={tour._id}>
              <Tour tour={tour} />
              <p>{tour.locations.toString()}</p>
              <img src={tour.photo}/>
              <button id="startTourBtn" className="btn-large grey waves-effect waves-light" type="button">Start Tour</button>
            </li>
          )
        })}
      </ul>
    )
  }
} */}
