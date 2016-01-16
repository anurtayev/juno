App = React.createClass({
  
  mixins: [ReactMeteorData],
  
  getMeteorData() {
    return { 
      isAuthenticated: this.isAuthenticated(),
      user: this.getUserName(),
      role: this.getRole(),
      
      projects: {
        data: Projects.find({}).fetch(),
        ready: Meteor.subscribe('App.Projects').ready()
      }
    };
  },
  
  isAuthenticated() {
    return Meteor.userId() !== null;
  },
  
  getUserName() {
    return this.isAuthenticated() ? Meteor.user().username : '';
  },
  
  getRole() {
    return this.getUserName() ? this.getUserName() === 'elmira' ? 'accounting' : 'engineering' : '';
  },
  
  componentDidMount(prevProps, prevState) {
    const username = this.getUserName();
    if ( !prevState || prevState.username !== username ) {
      this.setState({ username: username });
      this.props.history.push(`/${this.getRole()}`);
    }
  },
  
  render() {
    return (
      <div className='container-fluid'>
        <App.Header user={this.data.user} />
        {React.cloneElement(
            this.props.children, 
            {projects: this.data.projects}
        )}
      </div>
    );
  }
});