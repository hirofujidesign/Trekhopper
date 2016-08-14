import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import AccountsUIWrapper from './AccountsUIWrapper.jsx';
import Map from './components/Map/Map.jsx';
import Form from './components/Form/Form.jsx';

// App component - represents the whole app
export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userLogon: Meteor.userId(),
      hideCompleted: false,
    };
  }

  render() {
    console.log('INSIDE APP CONTAINER')
    return (
      <div className="container">

       <p>SHOW ME TOURS IM SIGNED UP FOR</p>

        <Map />

      </div>
    );
  }
}
