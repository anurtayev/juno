import {Entries} from '/libs/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.methods({
    'entries.insert' ( entry ) {
      console.log('entries.insert');
      Entries.insert(entry);
    },
    
    'entries.submit'() {
      Entries.update({ userId: Meteor.userId(), submited: false }, { $set: { submited: true } }, { multi: true });
    },

    'entries.invoice'() {
      Entries.update({ invoiced: false, submited: true }, { $set: { invoiced: true } }, { multi: true });
    },
    
    'entries.deleteEntry'( timesheetId, entryId ) {
      console.log('TODO');
    },
    
    'entries.copyEntry'( entryId ) {
      const entry = Entries.findOne({ _id: entryId });
      console.log(entry); 
      Meteor.call('insert', {
        project: entry.project,
        task: entry.task,
        hours: entry.hours,
        description: entry.description,
        submited: false,
        invoiced: false,
        createdAt: new Date(),
        userId: entry.userId,
        username: entry.username
      });
    }
  });
}