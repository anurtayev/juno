import Papa from 'meteor/harrison:papa-parse';
import saveAs from 'meteor/pfafman:filesaver';

export default {
  insert({Meteor, LocalState, FlowRouter}, entry) {
    
    if (
        !entry.date || 
        !entry.projectCode ||
        !entry.projectTitle ||
        !entry.projectTask ||
        !entry.hours 
    ) {
      return LocalState.set('SAVING_ERROR', 'required values are missing...');
    } else {
      LocalState.set('SAVING_ERROR', null);

      entry._id = Meteor.uuid();
      Meteor.call('entries.insert', entry, (err) => {
        if (err) {
          return LocalState.set('SAVING_ERROR', err.message);
        } else {
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
  
  submit({Meteor, LocalState, FlowRouter, Collections}) {
    Meteor.call('entries.submit');
    FlowRouter.go(`/engineering`);
  },
  
  navigateNewEntry({FlowRouter}) {
    FlowRouter.go('/newentry');
  },
  
  navigateEngineering({FlowRouter}) {
    FlowRouter.go('/engineering');
  }
};
