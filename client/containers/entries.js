import Entries from '../components/entries/index.jsx';
import {useDeps} from 'react-simple-di';
import {composeWithTracker, composeAll} from 'react-komposer';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  
  if (Meteor.subscribe('entries').ready()) {
    const entries = Collections.Entries.find().fetch();
    onData(null, {entries});
  }
};

export default composeAll(
  composeWithTracker(composer),
  useDeps()
)(Entries);