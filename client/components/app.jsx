App = React.createClass({
  
  mixins: [ReactMeteorData],
  
  getMeteorData() {
    return { 
      isAuthenticated: this.isAuthenticated(),
      userName: this.getUserName(),
      role: this.getRole(),
        
      projects: Projects.find({}).fetch(),
      projectsReady: Meteor.subscribe('Projects').ready()
    };
  },
  
  isAuthenticated() {
    return Meteor.userId() !== null;
  },
  
  getUserName() {
    return this.isAuthenticated() && Meteor.user() ? Meteor.user().username : '';
  },
  
  getRole() {
    return this.getUserName() ? this.getUserName() === 'elmira' ? 'accounting' : 'engineering' : '';
  },
        
  componentDidMount(prevProps, prevState) {
    if ( !prevState || prevState.username !== this.data.userName ) {
      this.setState({ username: this.data.userName });
      this.props.history.push(`/${this.data.role}`);
    }
  },
  
  render() {
    return (
      <div>
        <div>
          <div>
            <AccountsUI />
          </div>
          <div>
            {toolbar}
          </div>
        </div>
        <div>
          {workbench}
        </div>
      </div>
    );
  }
});