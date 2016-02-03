import Entries from '../components/entries/index.jsx';
import {useDeps} from 'react-simple-di';
import {composeWithTracker, composeAll} from 'react-komposer';

export const composer = ({context, sortBy}, onData) => {
  const {Meteor, Collections} = context();
  
  const sortOption = sortBy === 'date' ? {sort: {date: 1, createdAt: -1}} : {sort: {projectNumber: 1, createdAt: -1}} ;
  
  if (Meteor.subscribe('entries.engineering').ready()) {
    const entries = Collections.Entries.find({userId: Meteor.userId()}, sortOption).fetch();
    onData(null, {entries});
  }
};

export default composeAll(
  composeWithTracker(composer),
  useDeps()
)(Entries);