import {Entries} from '/libs/collections';
import {Meteor} from 'meteor/meteor';

export default function () {
  Meteor.publish('entries.engineering', function () {
    return Entries.find({userId: this.userId}, {sort: {createdAt: -1}});
  });

  Meteor.publish('entries.accounting', function () {
    return Entries.find({ submitted: true });
  });
}