import Papa from 'meteor/harrison:papa-parse';
import saveAs from 'meteor/pfafman:filesaver';

export default {
  insert({Meteor, LocalState, FlowRouter}, entry) {
    
    console.log('INSERT');
    console.log(entry);
    
    if (
        !entry.date || 
        !entry.hours 
    ) {
      console.log('INSERT: SAVING_ERROR');
      return LocalState.set('SAVING_ERROR', 'required values are missing...');
    } else {
      console.log('INSERT: SAVING_ERROR null');
      LocalState.set('SAVING_ERROR', null);

      entry.id = Meteor.uuid();
      Meteor.call('entries.insert', entry, (err) => {
        if (err) {
          console.log('INSERT: saving err');
          return LocalState.set('SAVING_ERROR', err.message);
        } else {
          console.log('INSERT: forwarding');
          FlowRouter.go(`/engineering`);
        }
      });
    }
  },

  clearErrors({LocalState}) {
    return LocalState.set('SAVING_ERROR', null);
  },
  
  invoice({Meteor, LocalState, FlowRouter, Collections}) {
    let csvString = Papa.unparse(Collections.Entries.find({}).fetch(), { newline: "\r\n" });
    saveAs(new Blob([csvString], { type: "text/plain;charset=utf-8" }), 'export.csv');
    Meteor.call('invoice');
    FlowRouter.go(`/invoicing`);
  },
  
  navigateNewEntry({FlowRouter}) {
    FlowRouter.go('/newentry');
  }
};
