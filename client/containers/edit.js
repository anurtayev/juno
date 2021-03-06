import Edit from '../components/edit/index.jsx';
import {useDeps} from 'react-simple-di';
import {composeWithTracker, composeAll} from 'react-komposer';
import CircularProgress from 'material-ui/lib/circular-progress';

export const composer = ({context, clearErrors, entryId}, onData) => {

  const {LocalState, Meteor, Collections} = context();

  const error = LocalState.get('SAVING_ERROR');
  if (
    Meteor.userId() &&
    Meteor.user() &&
    Meteor.subscribe('projects').ready() &&
    ( entryId ? Meteor.subscribe('entries.engineering.edit', entryId).ready() : true )
  ) {

    const entry = entryId ? Collections.Entries.findOne({_id: entryId}) : null;
    const projects = Collections.Projects.find({}, {sort: {projectNumber: 1}}).fetch();
    const userId = Meteor.userId();
    const username = Meteor.user().emails[0].address;
    onData(null, {error, userId, username, entry, projects});
  }

  // clearErrors when unmounting the component
  return clearErrors;
};

export const depsMapper = (context, actions) => ({
  saveEntry: actions.entries.insert,
  navigateEngineering: actions.entries.navigateEngineering,
  clearErrors: actions.common.clearErrors,
  context: () => context,
});

export default composeAll(
  composeWithTracker(composer, CircularProgress),
  useDeps(depsMapper)
)(Edit);
