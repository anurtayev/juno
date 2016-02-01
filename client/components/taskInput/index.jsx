import React from 'react';
import TaskTable from './taskTable.jsx';
import TextField from 'material-ui/lib/text-field';

export default class TaskInput extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      mouseInsideTable: false,
      showTable: false
    };
  }
  
  onFocus() {
    this.setState({
      mouseInsideTable: false,
      showTable: true
    });
    this.props.taskOnChange(null);
  }
  
  onBlur() {
    if ( !this.state.mouseInsideTable ) this.looseFocus();
  }
  
  taskOnSelect(selectedTask) {
    this.props.taskOnSelect(selectedTask);
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
  
  render() {
    let filteredTable;
    if (this.props.value) {
      filteredTable = [];
      this.props.tasks.forEach( task => {
        if ( task.indexOf( this.props.value ) > -1 ) filteredTable.push( task );
      })
    } else {
      filteredTable = this.props.tasks;
    }
    
    return (
      <div>
      
        <TextField 
          hintText={this.props.tasks.length ? 'Task': 'Taks. Select project first...'} 
          value={this.props.value} 
          onChange={this.props.taskOnChange} 
          onFocus={this.onFocus.bind(this)} 
          onBlur={this.onBlur.bind(this)} 
          underlineStyle={this.props.underlineStyle} 
          style={this.props.style} 
          fullWidth
        />
        
        {this.state.showTable ? 
          <TaskTable 
            tasks={filteredTable} 
            taskOnSelect={this.taskOnSelect.bind(this)} 
            onMouseInsideTable={this.onMouseInsideTable.bind(this)} 
            onMouseOutsideTable={this.onMouseOutsideTable.bind(this)}
          />
        : null}
        
      </div>
    );
  }
}

TaskInput.propTypes = {
  tasks: React.PropTypes.arrayOf( React.PropTypes.string ).isRequired,
  taskOnChange: React.PropTypes.func.isRequired,
  taskOnSelect: React.PropTypes.func.isRequired, 
  underlineStyle: React.PropTypes.object.isRequired,
  style: React.PropTypes.object.isRequired,
  selectedTask: React.PropTypes.string
};