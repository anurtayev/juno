import React from 'meteor/react';

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