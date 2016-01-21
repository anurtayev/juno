ProjectsTable = React.createClass({
  
  propTypes: {
    projects: React.PropTypes.arrayOf( React.PropTypes.object ).isRequired,
    onUpdate: React.PropTypes.func.isRequired,
    looseFocus: React.PropTypes.func.isRequired,
    onMouseInsideTable: React.PropTypes.func.isRequired,
    onMouseOutsideTable: React.PropTypes.func.isRequired
  },
  
  _rows(){
    return this.props.projects.map( (project) => {
      return ( <ProjectRow project={project} key={project._id} onUpdate={this.props.onUpdate} looseFocus={this.props.looseFocus} /> );
    });
  },
  
  handleOnMouseOver( e ) {
    this.props.onMouseInsideTable();
  },
  
  handleOnMouseOut( e ) {
    this.props.onMouseOutsideTable();
  },
  
  render() {
    return (
      <div id="entriesSheet" className="container-fluid visbox" onMouseOver={this.handleOnMouseOver} onMouseOut={this.handleOnMouseOut} >
        {this._rows()}
      </div>
    );
  }
});

