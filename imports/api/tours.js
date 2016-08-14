import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Tours = new Mongo.Collection('tours');

Meteor.methods({

  insertTour(name, locations, description,photo) {
    console.log(name);
    console.log(locations)
    console.log(description);

    locations = locations.split(';');
    locations = locations.map(function(s) {return s.trim() });

    check(name, String);
    check(locations, Array);
    check(description, String);

    // Make sure the user is logged in before creating a tour
    if (!this.userId) {
      throw new Meteor.Error('not-authorized');
    } else {
      Meteor.users.update({_id:this.userId},{ $set: { 'profile.tourguide': true } });

      Tours.insert({
        name,
        locations,
        description,
        photo,
        createdAt: new Date(),
        guideId: this.userId,
      });
    }
  },

  'tours.remove'(tourId) {
    check(tourId, String);

    Tours.remove(tourId);
  },
    'users.tourremove'(tourId,userId){
    console.log("IN tour remove")
    check(tourId,String);
    check(userId,String);
     Meteor.users.update({_id:userId}, {$pull: {'profile.chosenTours':tourId}});
  },

  'tours.setChecked'(tourId, setChecked) {
    check(tourId, String);
    check(setChecked, Boolean);

    Tours.update(tourId, { $set: { checked: setChecked } });
  },

  'tourSignUp'(userId, tourId) {
    check(userId, String);
    check(tourId, String);

    Meteor.users.update({_id: userId}, { $push: { 'profile.chosenTours': tourId }});
  }
});
