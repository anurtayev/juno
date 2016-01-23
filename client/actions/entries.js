export default {
  create({Meteor, LocalState, FlowRouter}, entry) {
    // validation
    if (
        !entry.title || 
        !entry.content
    ) {
      return LocalState.set('SAVING_ERROR', 'required values are missing...');
    }

    LocalState.set('SAVING_ERROR', null);

    entry.id = Meteor.uuid();
    Meteor.call('entry.insert', entry, (err) => {
      if (err) {
        return LocalState.set('SAVING_ERROR', err.message);
      }
    });
    FlowRouter.go(`/entry`);
  },

  clearErrors({LocalState}) {
    return LocalState.set('SAVING_ERROR', null);
  }
};
