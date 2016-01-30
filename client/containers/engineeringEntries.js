import Entries from '../components/entries/index.jsx';
import {useDeps} from 'react-simple-di';
import {composeWithTracker, composeAll} from 'react-komposer';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  
  if (Meteor.subscribe('entries.engineering').ready()) {
    const entries = Collections.Entries.find({userId: Meteor.userId()}, {sort: {createdAt: -1}}).fetch();
    onData(null, {entries});
  }
};

export default composeAll(
  composeWithTracker(composer),
  useDeps()
)(Entries);