import {Entries, Projects} from '/libs/collections';
import {Meteor} from 'meteor/meteor';

export default function () {
  Meteor.publish('entries', function () {
    return Entries.find({});
  });

  Meteor.publish('Entries.accounting', function () {
    return Entries.find({ invoiced: false, submited: true });
  });

  Meteor.publish('Entries.engineering', function () {
    return Entries.find({ userId: this.userId, submited: false });
  });
}