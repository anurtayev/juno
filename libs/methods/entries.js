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
      Entries.update({ userId: Meteor.userId(), submitted: false }, { $set: { submitted: true } }, { multi: true });
    },

    'entries.invoice'() {
      Entries.update({ invoiced: false, submited: true }, { $set: { invoiced: true } }, { multi: true });
    },
    
    'entries.delete'( entryId ) {
      Entries.remove({ _id: entryId });
    }
  });
}