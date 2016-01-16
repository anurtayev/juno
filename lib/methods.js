Meteor.methods({
  'timesheets.submit'() {
    Entries.update({ userId: Meteor.userId(), submited: false }, { $set: { submited: true } }, { multi: true });
  },

  'timesheets.invoice'() {
    Entries.update({ invoiced: false, submited: true }, { $set: { invoiced: true } }, { multi: true });
  },
  
  'timesheets.deleteEntry'( timesheetId, entryId ) {
    // TODO 
    Timesheets.update({ _id: entryId });
  },
  
  'timesheets.copyEntry'( entryId ) {
    console.log('how now!');
    const entry = Entries.findOne({ _id: entryId });
    console.log(entry); 
    Meteor.call('insertEntry', {
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
  },
  
  'timesheets.insertEntry' ( timesheetId, entry ) {
    console.log(entry);
    Entries.insert({
      project: entry.project,
      task: entry.task,
      hours: entry.hours,
      description: entry.description,
      submited: entry.submited,
      invoiced: entry.invoiced,
      createdAt: entry.createdAt,
      userId: entry.userId,
      username: entry.username
    });
  }
});