
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import AccountsUIWrapper from '../../../imports/ui/AccountsUIWrapper.jsx';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import GuideNav from './GuideNav.jsx';

export default class LoggedInNav extends TrackerReact(React.Component) {

	render() {
		if (Meteor.userId()){
			if (Meteor.user() && Meteor.user().profile && Meteor.user().profile.tourguide) {
				return (
					<div>
						<GuideNav />
					</div>
				);
			}
			else {
				return (
					<ul id="nav-mobile" className="right hide-on-med-and-down">
					  <li><a href="/viewtours">Find Tours</a></li>
					  <li><a href="/chosentours">Chosen Tours</a></li>
					  <li><a href="/maketour">Create a Tour</a></li>
					  <li id="signedIn"><AccountsUIWrapper /></li>
					</ul>
				);
			}
		}
		else {
			FlowRouter.go('/')
	  }
	}
}
