import {Projects} from '/libs/collections';
import {Meteor} from 'meteor/meteor';

export default function () {
  Meteor.publish('projects', function () {
    return Projects.find({});
  });
}