import {Entries, Projects} from '/libs/collections';
import {Meteor} from 'meteor/meteor';

export default function () {
  Meteor.publish('Entries.accounting', function () {
    if (!this.userId) {
      return this.ready();
    }

    return Entries.find({ invoiced: false, submited: true });
  });

  Meteor.publish('Entries.engineering', function () {
    if (!this.userId) {
      console.log('entries.entry: no user!');
      return this.ready();
    }

    return Entries.find({ userId: this.userId, submited: false });
  });
}