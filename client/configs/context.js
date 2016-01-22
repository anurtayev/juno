import Collections from '/libs/collections';
import {Meteor} from 'meteor/meteor';
// import {ReactiveDict} from 'meteor/reactive-dict';
// import {Tracker} from 'meteor/tracker';

export function initContext() {
  return {
    Meteor,
    FlowRouter,
    Collections,
    LocalState: new ReactiveDict(),
    Tracker
  };
}
