import {Entries, Projects} from '/libs/collections';
import {Meteor} from 'meteor/meteor';

Meteor.publish('Projects', function () {
  if (!this.userId) {
    return this.ready();
  }

  return Projects.find({});
});