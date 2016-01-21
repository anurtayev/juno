ProjectInput = React.createClass({
  
  propTypes: {
    projects: React.PropTypes.arrayOf( React.PropTypes.object ).isRequired,
    value: React.PropTypes.string,
    onUpdate: React.PropTypes.func.isRequired
  },
  
  getInitialState() {
      return {
        focus: false,
        filteredProjects: this.props.projects,
        mouseInsideTable: false
      };
  },
  
  onFocus( e ) {
    this.props.onUpdate( '' );
    this.setState({ focus: true, filteredProjects: this.props.projects });
  },
  
  onBlur( e ) {
    if ( !this.state.mouseInsideTable ) this.looseFocus();
  },
  
  looseFocus() {
    if ( this.state.mouseInsideTable ) this.setState({ mouseInsideTable: false });
    this.setState({ focus: false });
  },
  
  onMouseInsideTable() {
    console.log('23');
    this.setState({ mouseInsideTable: true });
  },
  
  onMouseOutsideTable() {
    this.setState({ mouseInsideTable: false });
  },
  
  handleChange( e ){
    this.props.onUpdate( e.target.value );
    if ( this.state.focus ) this.filterProjects( e.target.value );
  },
  
  filterProjects( searchKey ) {
    const newFilteredProject = [];
    this.props.projects.forEach( ( project ) => {
      const searchStr = project.code + project.title + project.location;
      if ( searchStr.indexOf( searchKey ) > -1 ) newFilteredProject.push( project );
    });
    
    this.setState({ filteredProjects: newFilteredProject });
  },
  
  _projectsTable() {
    return this.state.focus ? <ProjectsTable projects={this.state.filteredProjects} onUpdate={this.props.onUpdate} looseFocus={this.looseFocus} onMouseInsideTable={this.onMouseInsideTable} onMouseOutsideTable={this.onMouseOutsideTable} /> : null
  },
  
  render() {
    return (
      <div className="form-group">
        <label htmlFor="projectInput">Project</label>
        <input type="text" id="projectInput" placeholder="Type to find project" className="form-control"  autoComplete="off" onFocus={this.onFocus} onBlur={this.onBlur} onChange={this.handleChange} value={this.props.value} />
        {this._projectsTable()}
      </div>
    );
  }
});
