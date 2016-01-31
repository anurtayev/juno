export default {
  insert({Meteor, LocalState, FlowRouter}, entry) {
    
    if (
        !entry.date || 
        !entry.projectCode ||
        !entry.projectTitle ||
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
    Meteor.call('entries.submit');
    FlowRouter.go(`/engineering`);
  },
  
  navigateNewEntry({FlowRouter}) {
    FlowRouter.go('/newentry');
  },
  
  navigateEngineering({FlowRouter}) {
    FlowRouter.go('/engineering');
  },
  
  deleteEntry({Meteor}, entryId) {
    console.log(`deleteEntry action: ${entryId}`);
    Meteor.call('entries.delete', entryId);
  },
  
  editEntry({Meteor, FlowRouter}, entryId) {
    console.log(`editEntry action: ${entryId}`);
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
