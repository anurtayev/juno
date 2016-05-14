import EditProject from '../components/editProject/index.jsx';
import {useDeps} from 'react-simple-di';
import {composeWithTracker, composeAll} from 'react-komposer';
import CircularProgress from 'material-ui/lib/circular-progress';

export const composer = ({context, clearErrors, projectId}, onData) => {

  const {LocalState, Meteor, Collections} = context();

  const error = LocalState.get('SAVING_ERROR');

  if ( projectId ? Meteor.subscribe('projects.edit', projectId).ready() : true ) {
    const project = projectId ? Collections.Projects.findOne({_id: projectId}) : null;
    onData(null, {error, project});
  }

  // clearErrors when unmounting the component
  return clearErrors;
};

export const depsMapper = (context, actions) => ({
  onSave: actions.projects.insert,
  onCancel: actions.projects.navProjects,
  clearErrors: actions.common.clearErrors,
  context: () => context,
});

export default composeAll(
  composeWithTracker(composer, CircularProgress),
  useDeps(depsMapper)
)(EditProject);
