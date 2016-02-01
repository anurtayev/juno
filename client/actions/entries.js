export default {
  insert({Meteor, LocalState, FlowRouter}, entry) {
    
    if (
        !entry.date || 
        !entry.projectNumber ||
        !entry.projectName ||
        !entry.projectTask ||
        !entry.hours 
    ) return LocalState.set('SAVING_ERROR', 'required values are missing...');

    if (entry._id) {
      // update
      Meteor.call('entries.update', entry, (err) => {
        if (err) {
          return LocalState.set('SAVING_ERROR', err.message);
        } else {
          FlowRouter.go(`/engineering`);
        }
      });
    } else {
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
  
  submit({Meteor, FlowRouter}) {
    if (confirm('This will SUBMIT entries for invoicing!')) {
      Meteor.call('entries.submit');
      FlowRouter.go(`/engineering`);
    }
  },
  
  navigateNewEntry({FlowRouter}) {
    FlowRouter.go('/newentry');
  },
  
  navigateEngineering({FlowRouter}) {
    FlowRouter.go('/engineering');
  },
  
  deleteEntry({Meteor}, entryId) {
    Meteor.call('entries.delete', entryId);
  },
  
  editEntry({Meteor, FlowRouter}, entryId) {
    FlowRouter.go(`/edit/${entryId}`);
  },
  
  copyEntry({Meteor, Collections, LocalState, FlowRouter}, entryId) {
    const entry = Collections.Entries.findOne({ _id: entryId });
    entry._id = Meteor.uuid();
    entry.createdAt = new Date();
    Meteor.call('entries.insert', entry, (err) => {
      if (err) {
        return LocalState.set('SAVING_ERROR', err.message);
      }
    });
  }
};
