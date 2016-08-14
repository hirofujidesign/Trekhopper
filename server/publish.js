import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { Tours } from '../imports/api/tours.js';

Meteor.publish("allTours", function() {
  return Tours.find();
});
