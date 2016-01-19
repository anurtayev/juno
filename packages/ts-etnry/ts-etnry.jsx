Entry = React.createClass({
  
  propTypes: {
    projects: React.PropTypes.arrayOf( React.PropTypes.object ),
    projectsReady: React.PropTypes.bool,
    entries: React.PropTypes.arrayOf( React.PropTypes.object ),
    entriesReady: React.PropTypes.bool
  },
  
  render() {
    return (
      <div className='container-fluid visbox'>
      ZXSDC
      </div>
    );
  }
});