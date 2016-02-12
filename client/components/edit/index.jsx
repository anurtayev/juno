import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import NavigationClose from 'material-ui/lib/svg-icons/navigation/close';
import FlatButton from 'material-ui/lib/flat-button';
import Divider from 'material-ui/lib/divider';
import Paper from 'material-ui/lib/paper';
import TextField from 'material-ui/lib/text-field';
import DatePicker from 'material-ui/lib/date-picker/date-picker';
import ProjectInput from '../project-input/index.jsx';
import TaskInput from '../taskInput/index.jsx';
import ToolBar from './tb.jsx';

export default class Edit extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      _id: props.entry ? props.entry._id : null,
      date: props.entry ? props.entry.date : null,
      hours: props.entry ? props.entry.hours : 0,
      description: props.entry ? props.entry.description : '',
      submitted: props.entry ? props.entry.submitted : false,
      invoiced: props.entry ? props.entry.invoiced : false,
      createdAt: props.entry ? props.entry.createdAt : new Date(),
      userId: props.entry ? props.entry.userId : this.props.userId,
      username: props.entry ? props.entry.username : this.props.username,
      
      project: props.entry ? props.projects.find( (element, index, array) => { return props.entry.projectNumber === element.projectNumber ? true : false } ) : null,
      
      projectTask: props.entry ? props.entry.projectTask : '',
      taskInput_value: props.entry ? props.entry.projectTask : ''
    };
  }
  
  render() {
    const {error} = this.props;
    
    const underlineStyle = {
      display: 'none'
    };
    
    const style = {
      marginLeft: 20
    };
    
    return (
      <div>
      
        <ToolBar
          cancelAction={this.props.navigateEngineering}
          saveAction={this.props.saveEntry.bind(this, {
            _id: this.state._id,
            date: this.state.date,
            projectNumber: this.state.project ? this.state.project.projectNumber : '',
            projectName: this.state.project ? this.state.project.projectName : '',
            projectTask: this.state.projectTask,
            hours: this.state.hours,
            description: this.state.description,
            submitted: this.state.submitted,
            invoiced: this.state.invoiced,
            createdAt: this.state.createdAt,
            userId: this.state.userId,
            username: this.state.username,
          })}
        />
          
        {error ? <p style={{color: 'red'}}>{error}</p> : null}
        <Paper zDepth={2}>
        
          <DatePicker 
            hintText='Date' 
            autoOk={true} 
            value={this.state.date} 
            onChange={this.dateOnChange.bind(this)} 
            container='inline' 
            style={style} 
            underlineStyle={underlineStyle}
          />
          
          <Divider />
          
          <ProjectInput 
            underlineStyle={underlineStyle} 
            style={style} 
            projectOnChange={this.projectOnChange.bind(this)} 
            projects={this.props.projects}
            selectedProject={this.state.project}
          />
          
          <Divider/>
          
          <TaskInput 
            tasks={this.state.project ? this.state.project.tasks : []} 
            underlineStyle={underlineStyle} 
            style={style} 
            taskOnChange={this.taskOnChange.bind(this)}
            taskOnSelect={this.taskOnSelect.bind(this)}
            value={this.state.taskInput_value}
          />
          
          <Divider />
          
          <TextField 
            hintText='Hours' 
            underlineStyle={underlineStyle} 
            style={style} 
            onChange={this.hoursOnChange.bind(this)} 
            value={this.state.hours}
          />
          
          <Divider />
          
          <TextField 
            hintText='Description' 
            underlineStyle={underlineStyle} 
            style={style} 
            onChange={this.descriptionOnChange.bind(this)} 
            fullWidth 
            value={this.state.description}
          />
          
          <Divider />
        </Paper>
      </div>
    )
  }
  
  projectOnChange(project) {
    this.setState({project: project});
    this.taskOnSelect('');
  }
  
  dateOnChange(event, date) {
    this.setState({date: date});
  }
  
  hoursOnChange(event) {
    this.setState({hours: isNaN(parseInt(event.target.value)) ? 0 : parseInt(event.target.value)});
  }
  
  descriptionOnChange(event) {
    this.setState({description: event.target.value});
  }
  
  taskOnChange(e) {
    if (e) this.setState({ taskInput_value: e.target.value });
  }

  taskOnSelect(task) {
    this.setState({
      projectTask: task,
      taskInput_value: task
    });
  }
}

Edit.propTypes = {
  entry: React.PropTypes.object,
  projects: React.PropTypes.arrayOf( React.PropTypes.object ).isRequired,
  saveEntry: React.PropTypes.func.isRequired,
  navigateEngineering: React.PropTypes.func.isRequired,
  userId: React.PropTypes.string.isRequired,
  username: React.PropTypes.string.isRequired
};
