import React from 'react';

export default class Edit extends React.Component {
  render() {
    const {error} = this.props;
    return (
      <div>
    
        {error ? <p style={{color: 'red'}}>{error}</p> : null}
        
        <form  onSubmit={this.handleSubmit}>
        
          <div class="form-group">
            <button type="submit" className="btn btn-primary">Save</button>
            <button type="button" className="btn btn-primary" onClick={this.handleCancel}>Cancel</button>
          </div>
          
          <div class="form-group">
            <label for="dateInput">Date</label>
            <input ref="dateRef" type="text" class="form-control" id="dateInput" placeholder="Enter date"/>
          </div>
          
          <div class="form-group">
            <label for="projectInput">Project</label>
            <input ref="projectRef" type="text" class="form-control" id="projectInput" placeholder="Enter project"/>
          </div>
          
          <div class="form-group">
            <label for="taskInput">Task</label>
            <input ref="taskRef" type="text" class="form-control" id="taskInput" placeholder="Enter task"/>
          </div>
          
          <div class="form-group">
            <label for="hoursInput">Hours</label>
            <input ref="hoursRef" type="text" class="form-control" id="hoursInput" placeholder="Enter hours"/>
          </div>
          
          <div class="form-group">
            <label for="descriptionInput">Description</label>
            <input ref="descriptionRef" type="text" class="form-control" id="descriptionInput" placeholder="Enter description"/>
          </div>
          
        </form>  
      
      </div>
    )
  }
  
  handleSubmit(event) {
    event.preventDefault();
    
    this.props.actions.entries.insert({
      date: this.refs.dateRef.value,
      projectCode: this.refs.dateRef.value,
      projectName: this.refs.dateRef.value,
      projecTask: this.refs.dateRef.value,
      hours: this.refs.dateRef.value,
      description: this.refs.dateRef.value,
      submited: false,
      invoiced: false,
      createdAt: new Date(),
      userId: this.props.context.Meteor.userId(),
      username: this.props.context.Meteor.user().username
    });
    
    this.navigate();
  }

  handleCancel(event) {
    this.navigate();
  }
  
  navigate() {
    this.props.context.FlowRouter.go('/engineering');
  }
}