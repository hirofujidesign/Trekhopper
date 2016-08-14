import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Tours } from '../../../api/tours.js';
import Tour from './Tour.jsx';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

export default class MyTours extends TrackerReact(React.Component) {
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
    console.log('THIS IS TOURID TO BE DELTED FROM MYTOURS', tourid.target.id);
    var test = tourid.target.id;
    Meteor.call('users.tourremove', test, Meteor.userId());
  }

  showTours() {
        if (Meteor.user() && Meteor.user().profile && Meteor.user().profile.chosenTours ) {

    userTours = Meteor.users.find({_id: this.state.currentUser}, {'profile.chosentours': 1, _id: 0}).fetch();
    // console.log('THIS IS USERTOURS',userTours);
    currentTours = userTours[0].profile.chosenTours;
    console.log(currentTours, 'current tours in array');

    myTours = [];
    for (i=0;i<currentTours.length;i++) {
        var existingTours = Tours.findOne({_id: currentTours[i]});
          if (typeof existingTours !='undefined'){
            pushTour=Tours.find({_id: currentTours[i]}).fetch();
            myTours.push(pushTour);
          }
        }

    // myTours = currentTours.map((id) => {
    //   return (Tours.find({_id: id}).fetch())
    // });

    console.log('EXISITING TOURS', myTours);
    return myTours;
  }
}

  render() {
   
    let turs=this.showTours();
   
    
    console.log('THESE ARE TURS',turs);
    if ((turs) && (turs.length > 0)) {
      return (
        <ul>

          {this.showTours().map( (tour) => {
            return (
              <li key={tour[0]._id} className="z-depth-1 tourList">
                <Tour tour={tour[0]} />
                <p>{tour[0].locations.toString()}</p>
                <img id='chosenimg' src={tour[0].photo}/>
                <button onClick={this.removeTours.bind(this)} id={tour[0]._id} className="btn grey waves-effect waves-light" type="button">Remove Tour</button>
              </li>
              
            )
          })}
        </ul>
      )
    }

    else {
      return (
        <div id="noToursMsg">
          <h3>You havent's signed up for any tours yet!</h3>
          <h5>Click <a href="/viewtours">Here</a> to view available tours</h5>
        </div>
      )
    }

  }

}
