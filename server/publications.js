Meteor.publish('App.Accounting.', function () {
  if (!this.userId) {
    return this.ready();
  }

  return Entries.find({ invoiced: false, submited: true });
});

Meteor.publish('entries.entry', function () {
  if (!this.userId) {
    console.log('entries.entry: no user!');
    return this.ready();
  }
  
  return Entries.find({ userId: this.userId, submited: false });
});

Meteor.publish('App.Projects', function () {
  if (!this.userId) {
    return this.ready();
  }
  
  return Projects.find({});
});