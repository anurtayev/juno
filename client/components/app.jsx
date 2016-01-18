App = React.createClass({
  
  mixins: [ReactMeteorData],
  
  getMeteorData() {
    return { 
      role: Meteor.user() ? Meteor.user().username === 'elmira' ? 'accounting' : 'engineering' : '',
        
      lopa: 'lops',
      
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
  
  render() {
    return (
      <div>
        <div>
          <div>
            <AccountsUI />
          </div>
          <div>
            {this.props.toolbar}
          </div>
        </div>
        <div>
          {React.cloneElement(this.props.workbench, {
            lopa: 'doflert' 
          })}
        </div>
      </div>
    );
  }
});