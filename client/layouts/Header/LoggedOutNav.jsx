import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import AccountsUIWrapper from '../../../imports/ui/AccountsUIWrapper.jsx';

export default class LoggedOutNav extends Component {

	render() {
		console.log('inside LoggedOutNav component');
		return (
			<ul id="signin" >
				<AccountsUIWrapper />
			</ul>
		);
	}
};
