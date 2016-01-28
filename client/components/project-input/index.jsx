import React from 'react';
import ProjectsTable from './projectsTable.jsx';
import TextField from 'material-ui/lib/text-field';

class ProjectInput extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = this.getInitialStateValues();
  }
  
  getInitialStateValues() {
    return {
      selectedProject: null,
      textFieldValue: '',
      filteredProjects: this.props.projects,
      mouseInsideTable: false,
      focus: false
    };
  }
  
  onFocus() {
    this.setState(this.getInitialStateValues());
    this.props.selectedProjectOnChange(this.state.selectedProject);
  }
  
  onBlur() {
    if ( !this.state.mouseInsideTable ) this.looseFocus();
  }
  
  selectedProjectOnChange(selectedProject) {
    this.setState({
      selectedProject: selectedProject,
      textFieldValue: `${selectedProject.code} ${selectedProject.title} ${selectedProject.location}`
    });
    this.props.selectedProjectOnChange(this.state.selectedProject);
    this.looseFocus();
  }
  
  looseFocus() {
    if ( this.state.mouseInsideTable ) this.setState({ mouseInsideTable: false });
    this.setState({ focus: false });
  }
  
  onMouseInsideTable() {
    this.setState({ mouseInsideTable: true });
  }
  
  onMouseOutsideTable() {
    this.setState({ mouseInsideTable: false });
  }
  
  onChange() {
    this.setState({ textFieldValue: e.target.value });
    if ( this.state.focus ) this.filterProjects( e.target.value );
  }
  
  filterProjects( searchKey ) {
    const newFilteredProject = [];
    this.props.projects.forEach( project => {
      const searchStr = project.code + project.title + project.location;
      if ( searchStr.indexOf( searchKey ) > -1 ) newFilteredProject.push( project );
    });
    
    this.setState({ filteredProjects: newFilteredProject });
  }
  
  render() {
    return (
      <div>
        <TextField hintText="Project" value={this.state.textFieldValue} onChange={this.onChange} onFocus={this.onFocus} onBlur={this.onBlur} underlineStyle={underlineStyle} style={style}/>
        {this.state.focus ? <ProjectsTable projects={this.state.filteredProjects} selectedProjectOnChange={this.selectedProjectOnChange} looseFocus={this.looseFocus} onMouseInsideTable={this.onMouseInsideTable} onMouseOutsideTable={this.onMouseOutsideTable}/> : null}
      </div>
    );
  }
}

ProjectInput.propTypes = {
  projects: React.PropTypes.arrayOf( React.PropTypes.object ).isRequired,
  selectedProjectOnChange: React.PropTypes.func.isRequired
};

ProjectInput.displayName = 'TextField';

export default ProjectInput;