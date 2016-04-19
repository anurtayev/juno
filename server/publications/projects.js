import qq from '/libs/collections';
import {Meteor} from 'meteor/meteor';

const {Projects} = qq

export default () => {
  Meteor.publish('projects', function () {
    return Projects.find({});
  });
}
