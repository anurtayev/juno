import Edit from '../components/edit/index.jsx';
import {useDeps} from 'react-simple-di';
import {composeWithTracker, composeAll} from 'react-komposer';

export const composer = ({context, clearErrors, entryId}, onData) => {
  
  console.log(`inside: ${entryId}`);
  
  const {LocalState, Meteor, Collections} = context();
  
  const error = LocalState.get('SAVING_ERROR');
  if (Meteor.userId() && Meteor.user()) {
    
    const entry = entryId ? Collections.Entries.findOne({_id: entryId}) : null;
    const userId = Meteor.userId();
    const username = Meteor.user().username;
    onData(null, {error, userId, username, entry});
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