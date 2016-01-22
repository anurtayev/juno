import React from 'meteor/react';

default export class Entry extends React.Component {
  
    mixins: [ReactMeteorData],
  
  getMeteorData() {
    return { 
      role: Meteor.user() ? Meteor.user().username === 'elmira' ? 'accounting' : 'engineering' : '',
        
      projects: Projects.find({}).fetch(),
      projectsReady: Meteor.subscribe('Projects').ready()
    };
  },
  
  componentDidUpdate(prevProps, prevState) {
    if ( !prevState || prevState.role !== this.data.role ) {
      this.setState({ role: this.data.role });
      this.props.history.push(`/${this.data.role}`);
    }
  },
  

  
  propTypes: {
    projects: React.PropTypes.arrayOf( React.PropTypes.object ),
    projectsReady: React.PropTypes.bool
  },
  
  mixins: [ReactMeteorData],
  
  getMeteorData() {
    return {
      entries: Entries.find({ userId: Meteor.userId(), submited: false }, {sort: {createdAt: -1}}).fetch(),
      entriesReady: Meteor.subscribe('Entries.engineering').ready()
    };
  },
  
  render() {
    return React.cloneElement( this.props.children, {
        projects: this.props.projects,
        projectsReady: this.props.projectsReady,
        entries: this.data.entries,
        entriesReady: this.data.entriesReady
      });
  }
});