import Layout from '../components/layouts.main/index.jsx';
import {Meteor} from 'meteor/meteor';
import {composeWithTracker} from 'react-komposer';

export const composer = (props, onData) => {
  const username = Meteor.user() ? Meteor.user().username : '';
  onData(null, {username});
};

export default composeWithTracker(composer)(Layout);