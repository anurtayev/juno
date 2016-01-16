App.Engineering = React.createClass({
  
  propTypes: {
    projects: React.PropTypes.object.isRequired
  },
  
  mixins: [ReactMeteorData],
  
  getMeteorData() {
    return {
      entries: {
        data: Entries.find({ userId: Meteor.userId(), submited: false }, {sort: {createdAt: -1}}).fetch(),
        ready: Meteor.subscribe('App.Engineering.Entries').ready()
      }
    };
  },
  
  render() {
    return 
      React.cloneElement( 
        this.props.children, 
        {
          entries: this.data.entries,
          projects: this.props.projects
        }
      );
  }
});