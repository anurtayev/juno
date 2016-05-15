export default {
  insert({Meteor, LocalState, FlowRouter}, project) {
    if (
        !project.projectNumber ||
        !project.projectName ||
        !project.tasks ||
				!project.tasks.length
    ) return LocalState.set('SAVING_ERROR', 'required values are missing...');

		const method = project._id ? 'projects.update' : 'projects.insert'
    project._id = project._id ? project._id : Meteor.uuid();

    Meteor.call(
			method,
			project,
			err => err ? LocalState.set('SAVING_ERROR', err.message) : undefined
		);

    FlowRouter.go('/projectsentries');
  },

  navProjects({FlowRouter}) {
    FlowRouter.go('/projectsentries');
  },

  onInvoicing({FlowRouter}) {
    FlowRouter.go('/accounting');
  },

  onDelete({Meteor}, projectId) {
    if (confirm('This will delete the project!')) {
      Meteor.call('projects.delete', projectId);
    }
  },

  onEdit({FlowRouter}, projectId) {
    FlowRouter.go(`/editProject/${projectId}`);
  },

	onNewProject({FlowRouter}) {
    FlowRouter.go(`/newproject`);
  },

  onCopy({Meteor, Collections, LocalState, FlowRouter}, projectId) {
    const project = Collections.Entries.findOne({ _id: projectId });
    project._id = Meteor.uuid();
    Meteor.call('projects.insert', project, err => err ? LocalState.set('SAVING_ERROR', err.message) : undefined );
		FlowRouter.go(`/editProject/${project._id}`);
  }
}
