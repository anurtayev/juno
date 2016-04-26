import Collections from '/libs/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

const {Projects} = Collections

export default () => {
  Meteor.methods({
    'projects.insert'(project) {
      Projects.insert(project);
    },

    'projects.update'(project) {
      Projects.update({ _id: project._id }, { $set: {
        projectNumber: project.projectNumber,
        projectName: project.projectName,
        projectTasks: project.projectTasks
      } });
    },

    'projects.delete'(projectId) {
      Projects.remove({ _id: projectId });
    }
  });
}
