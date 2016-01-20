import {Entries, Projects} from '/lib/collections';
import {Meteor} from 'meteor/meteor';

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
