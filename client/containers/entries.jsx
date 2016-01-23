import NewPost from '../components/newpost/index.jsx';
import {useDeps} from 'react-simple-di';
import {composeWithTracker, composeAll} from 'react-komposer';

export const composer = ({context, clearErrors}, onData) => {
  const {LocalState} = context();
  const error = LocalState.get('SAVING_ERROR');
  onData(null, {error});

  // clearErrors when unmounting the component
  return clearErrors;
};

export const depsMapper = (context, actions) => ({
  create: actions.posts.create,
  clearErrors: actions.posts.clearErrors,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(NewPost);


import React from 'react';

export default class Entry extends React.Component {
  
  getMeteorData() {
    return { 
      projects: Projects.find({}).fetch(),
      projectsReady: Meteor.subscribe('Projects').ready(),
      entries: Entries.find({ userId: Meteor.userId(), submited: false }, {sort: {createdAt: -1}}).fetch(),
      entriesReady: Meteor.subscribe('Entries.engineering').ready()
    };
  }
  
  render() {
    return React.cloneElement( this.props.children, {
        projects: this.props.projects,
        projectsReady: this.props.projectsReady,
        entries: this.data.entries,
        entriesReady: this.data.entriesReady
      });
  }
}