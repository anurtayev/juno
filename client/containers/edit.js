import Edit from '../components/edit/index.jsx';
import {useDeps} from 'react-simple-di';
import {composeWithTracker, composeAll} from 'react-komposer';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  
  if (Meteor.subscribe('projects').ready()) {
    const projects = Collections.Projects.find().fetch();
    onData(null, {projects});
  }
};

export const depsMapper = (context, actions) => ({
  saveEntry: actions.entries.insert,
  navigateEngineering: actions.entries.navigateEngineering,
  clearErrors: actions.entries.clearErrors,
  context: () => context,
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Edit);