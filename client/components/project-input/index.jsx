import React from 'react';
import ProjectsTable from './projectsTable.jsx';
import TextField from 'material-ui/lib/text-field';

export default class ProjectInput extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      selectedProject: props.selectedProject,
      textFieldValue: props.selectedProject ? `${props.selectedProject.projectNumber} ${props.selectedProject.projectName} ${props.selectedProject.location}` : '',
      mouseInsideTable: false,
      showTable: false
    };
  }
  
  onFocus() {
    this.setState({
      selectedProject: null,
      textFieldValue: '',
      mouseInsideTable: false,
      showTable: true
    });
    this.props.projectOnChange(null);
  }
  
  onBlur() {
    if ( !this.state.mouseInsideTable ) this.looseFocus();
  }
  
  projectOnChange(selectedProject) {
    this.setState({
      selectedProject: selectedProject,
      textFieldValue: `${selectedProject.projectNumber} ${selectedProject.projectName} ${selectedProject.location}`
    });
    this.props.projectOnChange(selectedProject);
    this.looseFocus();
  }
  
  looseFocus() {
    if ( this.state.mouseInsideTable ) this.setState({ mouseInsideTable: false });
    this.setState({ showTable: false });
  }
  
  onMouseInsideTable() {
    this.setState({ mouseInsideTable: true });
  }
  
  onMouseOutsideTable() {
    this.setState({ mouseInsideTable: false });
  }
  
  onChange(e) {
    this.setState({ textFieldValue: e.target.value });
  }
  
  render() {
    let filteredProjects;
    if (this.state.textFieldValue) {
      filteredProjects = [];
      this.props.projects.forEach( project => {
        const searchStr = project.projectNumber + project.projectName + project.location;
        if ( searchStr.indexOf( this.state.textFieldValue ) > -1 ) filteredProjects.push( project );
      })
    } else {
      filteredProjects = this.props.projects;
    }
    
    return (
      <div>
        <TextField hintText='Project' value={this.state.textFieldValue} onChange={this.onChange.bind(this)} onFocus={this.onFocus.bind(this)} onBlur={this.onBlur.bind(this)} underlineStyle={this.props.underlineStyle} style={this.props.style} fullWidth/>
        {this.state.showTable ? <ProjectsTable projects={filteredProjects} projectOnChange={this.projectOnChange.bind(this)} onMouseInsideTable={this.onMouseInsideTable.bind(this)} onMouseOutsideTable={this.onMouseOutsideTable.bind(this)}/> : null}
      </div>
    );
  }
}

ProjectInput.propTypes = {
  projects: React.PropTypes.arrayOf( React.PropTypes.object ).isRequired,
  projectOnChange: React.PropTypes.func.isRequired,
  underlineStyle: React.PropTypes.object.isRequired,
  style: React.PropTypes.object.isRequired,
  selectedProject: React.PropTypes.object
};