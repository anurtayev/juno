import ProjectInput from '../components/project-input/index.jsx';
import {useDeps} from 'react-simple-di';
import {composeWithTracker, composeAll} from 'react-komposer';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  
  if (Meteor.subscribe('projects').ready()) {
    const projects = Collections.Projects.find().fetch();
    onData(null, {projects});
  }
};

export default composeAll(
  composeWithTracker(composer),
  useDeps()
)(ProjectInput);