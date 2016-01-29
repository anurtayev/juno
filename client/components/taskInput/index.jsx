import React from 'react';
import ProjectsTable from './projectsTable.jsx';
import TextField from 'material-ui/lib/text-field';

export default class TaskInput extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      selectedProject: null,
      textFieldValue: '',
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
    this.props.projectOnChange(this.state.selectedProject);
  }
  
  onBlur() {
    console.log('onBlur');
    console.log(`mouseInsideTable: ${this.state.mouseInsideTable}`);
    if ( !this.state.mouseInsideTable ) this.looseFocus();
  }
  
  taskOnChange(selectedProject) {
    this.setState({
      selectedProject: selectedProject,
      textFieldValue: `${selectedProject.code} ${selectedProject.title} ${selectedProject.location}`
    });
    this.props.projectOnChange(this.state.selectedProject);
    this.looseFocus();
  }
  
  looseFocus() {
    console.log('looseFocus');
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
        const searchStr = project.code + project.title + project.location;
        if ( searchStr.indexOf( this.state.textFieldValue ) > -1 ) filteredProjects.push( project );
      })
    } else {
      filteredProjects = this.props.projects;
    }
    
    return (
      <div>
      
        <TextField 
          hintText={this.props.tasks.length ? 'Task': 'Select project first'} 
          value={this.state.textFieldValue} 
          onChange={this.onChange.bind(this)} 
          onFocus={this.onFocus.bind(this)} 
          onBlur={this.onBlur.bind(this)} 
          underlineStyle={this.props.underlineStyle} 
          style={this.props.style} 
          fullWidth
        />
        
        {this.state.showTable ? <ProjectsTable projects={filteredProjects} projectOnChange={this.taskOnChange.bind(this)} onMouseInsideTable={this.onMouseInsideTable.bind(this)} onMouseOutsideTable={this.onMouseOutsideTable.bind(this)}/> : null}
        
      </div>
    );
  }
}

TaskInput.propTypes = {
  tasks: React.PropTypes.arrayOf( React.PropTypes.string ).isRequired,
  taskOnChange: React.PropTypes.func.isRequired,
  underlineStyle: React.PropTypes.object.isRequired,
  style: React.PropTypes.object.isRequired
};