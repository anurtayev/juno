import Edit from '../components/edit/index.jsx';
import {useDeps} from 'react-simple-di';
import {composeWithTracker, composeAll} from 'react-komposer';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  
  if (Meteor.subscribe('entries').ready()) {
    const entries = Collections.Posts.find().fetch();
    onData(null, {entries});
  }
};

export default composeAll(
  composeWithTracker(composer),
  useDeps()
)(Edit);