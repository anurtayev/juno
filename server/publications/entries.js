import {Entries} from '/libs/collections';
import {Meteor} from 'meteor/meteor';

export default function () {
  Meteor.publish('entries', function () {
    return Entries.find({});
  });

  Meteor.publish('entries.accounting', function () {
    return Entries.find({ invoiced: false, submited: true });
  });

  Meteor.publish('entries.engineering', function () {
    return Entries.find({ userId: this.userId, submited: false });
  });
}