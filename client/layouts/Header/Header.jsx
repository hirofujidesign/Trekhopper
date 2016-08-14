
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import AccountsUIWrapper from '../../../imports/ui/AccountsUIWrapper.jsx';
import LoggedInNav from './LoggedInNav.jsx';
import LoggedOutNav from './LoggedOutNav.jsx';
import { Accounts } from 'meteor/accounts-ui';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

export default class Header extends TrackerReact(React.Component)  {

  constructor(props) {
    super(props);
    this.state = {
      user: Meteor.userId()
    };
  }

  render() {
    var navOptions = (Meteor.userId()) ? <LoggedInNav /> : <LoggedOutNav />;

    return (
      <nav>
        <div className="nav-wrapper">
          <a href="/" className="brand-logo">TrekHopper</a>
          {navOptions}
        </div>
      </nav>
    )
  }
}
