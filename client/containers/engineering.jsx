Engineering = React.createClass({
  
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