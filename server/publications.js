Meteor.publish('Entries.accounting', function () {
  if (!this.userId) {
    return this.ready();
  }

  return Entries.find({ invoiced: false, submited: true });
});

Meteor.publish('Entries.engineering', function () {
  if (!this.userId) {
    console.log('entries.entry: no user!');
    return this.ready();
  }
  
  return Entries.find({ userId: this.userId, submited: false });
});

Meteor.publish('Projects', function () {
  if (!this.userId) {
    return this.ready();
  }
  
  return Projects.find({});
});