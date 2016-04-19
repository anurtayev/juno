import qq from '/libs/collections'
import {Meteor} from 'meteor/meteor'

const {Entries} = qq

export default () => {
  Meteor.publish('entries.engineering', function () {
    return Entries.find({userId: this.userId});
  });

  Meteor.publish('entries.engineering.edit', function (entryId) {
    return Entries.find({_id: entryId});
  });

  Meteor.publish('entries.accounting', function () {
    return Entries.find({ submitted: true });
  });
}
