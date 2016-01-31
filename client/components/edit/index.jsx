import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import NavigationClose from 'material-ui/lib/svg-icons/navigation/close';
import FlatButton from 'material-ui/lib/flat-button';
import Divider from 'material-ui/lib/divider';
import Paper from 'material-ui/lib/paper';
import TextField from 'material-ui/lib/text-field';
import DatePicker from 'material-ui/lib/date-picker/date-picker';
import ProjectInput from '../../containers/projectInput';
import TaskInput from '../taskInput/index.jsx';

export default class Edit extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      _id: props.entry ? props.entry._id : null,
      date: props.entry ? props.entry.date : null,
      projectCode: props.entry ? props.entry.projectCode : '',
      projectTitle: props.entry ? props.entry.projectTitle : '',
      projectTask: props.entry ? props.entry.projectTask : '',
      hours: props.entry ? props.entry.hours : 0,
      description: props.entry ? props.entry.description : '',
      submitted: props.entry ? props.entry.submitted : false,
      invoiced: props.entry ? props.entry.invoiced : false,
      createdAt: props.entry ? props.entry.createdAt : new Date(),
      userId: props.entry ? props.entry.userId : this.props.userId,
      username: props.entry ? props.entry.username : this.props.username,
      
      _edt_tasks: []
    };
  }
  
  render() {
    const {error} = this.props;
    
    const underlineStyle = {
      display: 'none',
    };
    
    const style = {
      marginLeft: 20,
    };
    
    console.log(this.state);

    return (
      <div>
        <AppBar
          title={<span>Title</span>}
          iconElementLeft={<IconButton onTouchTap={this.props.navigateEngineering}><NavigationClose /></IconButton>}
          iconElementRight={
            <FlatButton 
              label="Save" 
              onTouchTap={this.props.saveEntry.bind(this, {
                _id: this.state._id,
                date: this.state.date,
                projectCode: this.state.projectCode,
                projectTitle: this.state.projectTitle,
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
          }
        />
          
        {error ? <p style={{color: 'red'}}>{error}</p> : null}
        <Paper zDepth={2}>
          <DatePicker ref='dateRef' hintText="Date" autoOk={true} value={this.state.date} onChange={this.dateOnChange.bind(this)} container="inline" style={style} underlineStyle={underlineStyle}/>
          <Divider />
          <ProjectInput underlineStyle={underlineStyle} style={style} projectOnChange={this.projectOnChange.bind(this)}/>
          <Divider />
          <TaskInput tasks={this.state._edt_tasks} underlineStyle={underlineStyle} style={style} taskOnChange={this.taskOnChange.bind(this)}/>
          <Divider />
          <TextField hintText="Hours" underlineStyle={underlineStyle} style={style} onChange={this.hoursOnChange.bind(this)} value={this.state.hours}/>
          <Divider />
          <TextField hintText="Description" underlineStyle={underlineStyle} style={style} onChange={this.descriptionOnChange.bind(this)} fullWidth value={this.state.description}/>
          <Divider />
        </Paper>
      </div>
    )
  }
  
  projectOnChange(project) {
    console.log(`projectOnChange typeOf: ${typeof project}`);
    console.log(`projectOnChange in: ${project ? project.title : 'falsy'}`);
    this.setState({
      projectCode: project ? project.code : '',
      projectTitle: project ? project.title : '',
      _edt_tasks: project ? project.tasks : []
    });
  }
  
  taskOnChange(task) {
    console.log(`taskOnChange typeOf: ${typeof task}`);
    console.log(`taskOnChange in: ${task}`);
    this.setState({projectTask: task});
  }
  
  dateOnChange(event, date) {
    this.setState({date: date});
  }
  
  hoursOnChange(event) {
    this.setState({hours: parseInt(event.target.value)});
  }
  
  descriptionOnChange(event) {
    this.setState({description: event.target.value});
  }
}

Edit.propTypes = {
  entry: React.PropTypes.object,
  saveEntry: React.PropTypes.func.isRequired,
  navigateEngineering: React.PropTypes.func.isRequired,
  userId: React.PropTypes.string.isRequired,
  username: React.PropTypes.string.isRequired
};
