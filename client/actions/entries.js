export default {
  insert({Meteor, LocalState, FlowRouter}, entry) {
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
  },
  
  invoice({Meteor, LocalState, FlowRouter}) {
    let csvString = Papa.unparse(Entries.find({}).fetch(), { newline: "\r\n" });
    saveAs(new Blob([csvString], { type: "text/plain;charset=utf-8" }), 'export.csv');
    Meteor.call('invoice');
    FlowRouter.go(`/invoicing`);
  }
};
