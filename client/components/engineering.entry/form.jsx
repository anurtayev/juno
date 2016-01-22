import React from 'meteor/react';

export default class EntryForm extends React.Component {
  
  getInitialState() {
      return {
        project: null,
        projectInput: '',
        task: this.props.tasks[0]
      };
  }
  
  handleProjectChange( projectId ) {
    const newProject = this.resolveProject( projectId );
    if ( newProject ) {
      this.setState({ project: newProject, projectInput: newProject? `${newProject.code} - ${newProject.title}` : '' });
    } else {
      this.setState({ project: newProject, projectInput: projectId });
    }
  }
  
  resolveProject( projectId ) {
    let resolved = null;
    
    this.props.projects.forEach( ( project ) => {
      if ( project._id === projectId ) {
        resolved = project;
      }
    });

    console.log( resolved );
    return resolved;
  }
  
  handleTaskChange( taskId ) {
    console.log( `@parent task set to : ${taskId}` );
    this.setState({ task: this.resolveTask( taskId ) });
  }
  
  resolveTask( taskId ) {
    let resolved = null;
    this.props.tasks.forEach( ( task ) => {
      if ( task._id === taskId ) {
        resolved = task;
      }
    });
    return resolved;
  }
  
  handleSubmit(event) {
    
    event.preventDefault();
    
    Meteor.call("insertEntry", {
      projectCode: this.state.project.code,
      projectTitle: this.state.project.title,
      task: this.state.task.text,
      hours: ReactDOM.findDOMNode(this.refs.hours).value.trim(),
      description: ReactDOM.findDOMNode(this.refs.description).value.trim(),
      submited: false,
      invoiced: false,
      createdAt: new Date(),
      userId: Meteor.userId(),
      username: Meteor.user().username
    });
    
    this.clearForm();
  }
  
  clearForm() {
    this.setState({
        project: null,
        projectInput: '',
        task: this.props.tasks[0]
    });
    ReactDOM.findDOMNode(this.refs.hours).value = '';
    ReactDOM.findDOMNode(this.refs.description).value = '';
  }
 
  _hours() {
    return (
      <div className="form-group">
        <label htmlFor="hoursInput">Hours</label>
        <input type="text" ref="hours" id="hoursInput" placeholder="Number of hours" className="form-control" autoComplete="off" />
      </div>
    ); 
  }
  
  _description() {
    return (
      <div className="form-group">
        <label htmlFor="descriptionInput">Description</label>
        <input type="text" ref="description" id="descriptionInput" placeholder="Type to add description" className="form-control" />
      </div>
    );
  }
  
  _submit() {
    return (
      <div className="form-group">
        <button type="submit" className="btn btn-primary">Submit entry</button>
      </div>
    );
  }
  
  render() {
    return (
      <form id="entryForm" className="new-entry visbox" onSubmit={this.handleSubmit}>
      
        <ProjectInput projects={this.props.projects} value={this.state.projectInput} onUpdate={this.handleProjectChange} />
        
        <TaskInput tasks={this.props.tasks} value={this.state.task} onUpdate={this.handleTaskChange} />
        
        {this._hours()}
        
        {this._description()}
        
        {this._submit()}
        
      </form>
    );
  }
}