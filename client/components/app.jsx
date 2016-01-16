App = React.createClass({
  
  mixins: [ReactMeteorData],
  
  getMeteorData() {
    return { 
      user: {
        isAuthenticated() {
          return Meteor.userId() !== null;
        },
        
        name() {
          return this.isAuthenticated() ? Meteor.user().username : '';
        },
        
        role() {
          return this.name() ? this.name() === 'elmira' ? 'accounting' : 'engineering' : '';
        }
      },
      
      projects: {
        data: Projects.find({}).fetch(),
        ready: Meteor.subscribe('App.Projects').ready()
      }
    };
  },
  
  componentDidMount(prevProps, prevState) {
    if ( !prevState || prevState.username !== this.data.user.name() ) {
      this.setState({ username: this.data.user.name() });
      this.props.history.push(`/${this.getRole()}`);
    }
  },
  
  render() {
    return (
      <div className='container-fluid'>
        <Header user={this.data.user} />
        {React.cloneElement(
            this.props.children, 
            {projects: this.data.projects}
        )}
      </div>
    );
  }
});