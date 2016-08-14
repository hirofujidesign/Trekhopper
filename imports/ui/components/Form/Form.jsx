import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';

import { Tours } from '../../../api/tours.js';

export default class Form extends React.Component {
  handleSubmit(event) {
    event.preventDefault();

    const tourName = ReactDOM.findDOMNode(this.refs.tourName).value.trim();
    const tourLocations = ReactDOM.findDOMNode(this.refs.tourLocations).value.trim();
    const tourDescription = ReactDOM.findDOMNode(this.refs.tourDescription).value.trim();
    const tourPhoto = ReactDOM.findDOMNode(this.refs.tourPhoto).value.trim();

    Meteor.call('insertTour', tourName, tourLocations, tourDescription,tourPhoto);

    FlowRouter.go('/');
  }

  render() {
    return (
      <div className="container">
        <form className="col s12" onSubmit={this.handleSubmit.bind(this)} >
          <div className="row">
            <div className="input-field col s12">
              <input placeholder="" id="tour_name" type="text" ref="tourName" />
              <label htmlFor="tour_name">Tour Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input id="locations" type="text" ref="tourLocations" />
              <label htmlFor="locations">Enter locations in the format "Name/Address, City, State" and separate each location with a semi-colon</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <textarea id="description" className="materialize-textarea" type="text" ref="tourDescription"></textarea>
              <label htmlFor="description"><span id="enterLocationsInstructions">Enter Tour Description</span></label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input id="locations" type="text" ref="tourPhoto" />
              <label htmlFor="photo">Enter URL for Tour photo</label>
            </div>
          </div>
          <button className="btn-large grey waves-effect waves-light" type="submit" name="action">Submit
            <i className="material-icons right"></i>
          </button>
        </form>
      </div>
    )
  }
};
