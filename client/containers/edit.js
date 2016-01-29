import Edit from '../components/edit/index.jsx';
import {useDeps} from 'react-simple-di';
import {composeWithTracker, composeAll} from 'react-komposer';

export const composer = ({context, clearErrors}, onData) => {
  const {LocalState, Meteor} = context();
  
  const error = LocalState.get('SAVING_ERROR');
  if (Meteor.userId() && Meteor.user()) {
    const userId = Meteor.userId();
    const username = Meteor.user().username;
    onData(null, {error, userId, username});
  }

  // clearErrors when unmounting the component
  return clearErrors;
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