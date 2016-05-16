export default {
  insert({Meteor, LocalState, FlowRouter, Collections}, project) {
    if (
        !project.projectNumber ||
        !project.projectName ||
        !project.tasks ||
				!project.tasks.length
    )
			return LocalState.set('SAVING_ERROR', 'required values are missing...');

		let method

		if (project._id) {
			// update
			Meteor.call(
				'projects.update',
				project,
				err => (err ? LocalState.set('SAVING_ERROR', err.message) : undefined)
			)

			FlowRouter.go('/projectsentries');
		} else {
			// insert
			Meteor.subscribe('projects', () => {
				// projectNumber must be unique
				const prj = Collections.Projects.findOne({projectNumber: project.projectNumber});
				console.log(prj);

				if (Collections.Projects.findOne({projectNumber: project.projectNumber}))
					return LocalState.set('SAVING_ERROR', 'projectNumber must be unique...');

				// projectNumber must be unique
				if (Collections.Projects.findOne({projectName: project.projectName}))
					return LocalState.set('SAVING_ERROR', 'projectName must be unique...');

				project._id = Meteor.uuid()
				Meteor.call(
					'projects.insert',
					project,
					err => err ? LocalState.set('SAVING_ERROR', err.message) : undefined
				)
				
				FlowRouter.go('/projectsentries');
			})
		}
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

  onCopy({FlowRouter}, projectId) {
		FlowRouter.go(`/copyProject/${projectId}`);
  }
}
