import {Entries, Projects} from '/libs/collections';
import {Meteor} from 'meteor/meteor';

export default function () {
  Meteor.publish('Projects', function () {
    if (!this.userId) {
      return this.ready();
    }

    return Projects.find({});
  });
}