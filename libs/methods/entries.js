import qq from '/libs/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

const {Entries} = qq

export default function () {
  Meteor.methods({
    'entries.insert' ( entry ) {
      Entries.insert(entry);
    },

    'entries.update' ( entry ) {
      Entries.update({ _id: entry._id }, { $set: {
        date: entry.date,
        projectNumber: entry.projectNumber,
        projectName: entry.projectName,
        projectTask: entry.projectTask,
        hours: entry.hours,
        description: entry.description
      } });
    },

    'entries.submit'() {
      Entries.update({ userId: Meteor.userId(), submitted: false }, { $set: { submitted: true } }, { multi: true });
    },

    'entries.invoice'() {
      Entries.update({ invoiced: false, submitted: true }, { $set: { invoiced: true } }, { multi: true });
    },

    'entries.delete'( entryId ) {
      Entries.remove({ _id: entryId });
    },

    'entries.wipeOut'() {
      Entries.remove({ submitted: true, invoiced: true });
    }
  });
}
