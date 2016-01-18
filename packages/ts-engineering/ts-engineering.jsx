Engineering = React.createClass({
  
  propTypes: {
    projects: React.PropTypes.arrayOf( React.PropTypes.object ).isRequired,
    projectsReady: React.PropTypes.bool.isRequired
  },
  
  mixins: [ReactMeteorData],
  
  getMeteorData() {
    return {
      entries: Entries.find({ userId: Meteor.userId(), submited: false }, {sort: {createdAt: -1}}).fetch(),
      entriesReady: Meteor.subscribe('Entries.engineering').ready()
    };
  },
  
  render() {
    return <div>{this.props.children}</div>;
  }
});