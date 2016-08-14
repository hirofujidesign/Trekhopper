import React from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

export default class MainPage extends TrackerReact(React.Component) {
	constructor () {
		super()
		this.state = {
			currentUser : Meteor.userId()
		}
	}

	render () {
		console.log('from mainpage',this.state.currentUser);

  	if (Meteor.user()) {
  		return (
        <div>
    			<h3 className="welcome">You are logged in. Now go make / join Tours today!</h3>
          <video autoPlay loop id="video-background" muted>
            <source src="https://dl.dropboxusercontent.com/u/65144080/backgroundVideo.mp4" type="video/mp4"></source>
          </video>
        </div>
  		)
  	}
  	else {
  		return (
        <div>
    			<h3 className="welcome"> Welcome! Please log in to get started </h3>
          <video autoPlay loop id="video-background" muted>
            <source src="https://dl.dropboxusercontent.com/u/65144080/backgroundVideo.mp4" type="video/mp4"></source>
          </video>
        </div>
  		)
  	}
  }
}
