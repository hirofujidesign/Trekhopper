
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import AccountsUIWrapper from '../../../imports/ui/AccountsUIWrapper.jsx';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

export default class GuideNav extends TrackerReact(React.Component) {

	render() {
		return (
			<ul id="nav-mobile" className="right hide-on-med-and-down">
			  <li><a href="/guideView">Manage My Tours</a></li>
			  <li><a href="/viewtours">Select Tours</a></li>
			  <li><a href="/chosentours">Chosen Tours</a></li>
			  <li><a href="/maketour">Create a Tour</a></li>
			  <li id="signedIn"><AccountsUIWrapper /></li>
			</ul>
		);
	}
};



{/* ---PREVIOUS NAV----
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import AccountsUIWrapper from '../../../imports/ui/AccountsUIWrapper.jsx';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

export default class GuideNav extends TrackerReact(React.Component) {

	render() {
		return (
			<ul id="nav-mobile" className="right hide-on-med-and-down">
			  <li><a href="/guideView">Launch My Tours</a></li>
			  <li><a href="/viewtours">Select Tours</a></li>
			  <li><a href="/chosentours">Chosen Tours</a></li>
			  <li><a href="/maketour">Create a Tour</a></li>
			  <li id="signedIn"><AccountsUIWrapper /></li>
			</ul>
		);
	}
};
*/}