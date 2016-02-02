import {Entries} from '/libs/collections';
import {Meteor} from 'meteor/meteor';

export default function () {
  Meteor.publish('entries.engineering', function () {
    return Entries.find({userId: this.userId});
  });

  Meteor.publish('entries.engineering.edit', function (entryId) {
    return Entries.find({_id: entryId});
  });

  Meteor.publish('entries.accounting', function () {
    return Entries.find({ submitted: true });
  });
}