import React from 'react';
import TaskTable from './taskTable.jsx';
import TextField from 'material-ui/lib/text-field';

export default class TaskInput extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      selectedTask: null,
      textFieldValue: '',
      mouseInsideTable: false,
      showTable: false
    };
  }
  
  onFocus() {
    this.setState({
      selectedTask: null,
      textFieldValue: '',
      mouseInsideTable: false,
      showTable: true
    });
    this.props.taskOnChange(this.state.selectedTask);
  }
  
  onBlur() {
    if ( !this.state.mouseInsideTable ) this.looseFocus();
  }
  
  taskOnChange(selectedTask) {
    this.setState({
      selectedTask: selectedTask,
      textFieldValue: selectedTask
    });
    this.props.taskOnChange(this.state.selectedTask);
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
    let filteredTable;
    if (this.state.textFieldValue) {
      filteredTable = [];
      this.props.tasks.forEach( task => {
        if ( task.indexOf( this.state.textFieldValue ) > -1 ) filteredTable.push( task );
      })
    } else {
      filteredTable = this.props.tasks;
    }
    
    return (
      <div>
      
        <TextField 
          hintText={this.props.tasks.length ? 'Task': 'Taks. Select project first...'} 
          value={this.state.textFieldValue} 
          onChange={this.onChange.bind(this)} 
          onFocus={this.onFocus.bind(this)} 
          onBlur={this.onBlur.bind(this)} 
          underlineStyle={this.props.underlineStyle} 
          style={this.props.style} 
          fullWidth
        />
        
        {this.state.showTable ? 
          <TaskTable 
            tasks={filteredTable} 
            taskOnChange={this.taskOnChange.bind(this)} 
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
  underlineStyle: React.PropTypes.object.isRequired,
  style: React.PropTypes.object.isRequired
};