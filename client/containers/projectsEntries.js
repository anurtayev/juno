import Projects from '../components/projects/index.jsx'
import {useDeps} from 'react-simple-di'
import {composeWithTracker, composeAll} from 'react-komposer'
import CircularProgress from 'material-ui/lib/circular-progress'

export const composer = ({context}, onData) => {
  const {Meteor, Collections, LocalState} = context();

	const error = LocalState.get('SAVING_ERROR');

  if (Meteor.subscribe('projects').ready()) {
    const projects = Collections.Projects.find({}).fetch();

    onData(null, {projects, error});
  }
};

export const depsMapper = (context, actions) => ({
  onInvoicing: actions.projects.onInvoicing,
	onDelete: actions.projects.onDelete,
	onCopy: actions.projects.onCopy,
  onEdit: actions.projects.onEdit,
	onNewProject: actions.projects.onNewProject,
  clearErrors: actions.common.clearErrors,
  context: () => context,
});

export default composeAll(
  composeWithTracker(composer, CircularProgress),
  useDeps(depsMapper)
)(Projects);
