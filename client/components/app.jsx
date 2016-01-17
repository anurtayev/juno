App = React.createClass({
  
  mixins: [ReactMeteorData],
  
  getMeteorData() {
    return { 
      user: {
        isAuthenticated() {
          return Meteor.userId() !== null;
        },
        
        name() {
          return this.isAuthenticated() && Meteor.user() ? Meteor.user().username : '';
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
    console.log(this.data.user.isAuthenticated());
    console.log(this.data.user.name());
    console.log(this.data.user.role());
    if ( !prevState || prevState.username !== this.data.user.name() ) {
      this.setState({ username: this.data.user.name() });
      this.props.history.push(`/${this.data.user.role()}`);
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