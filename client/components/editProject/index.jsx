import React from 'react'
import ReactDOM from 'react-dom'
import AppBar from 'material-ui/lib/app-bar'
import IconButton from 'material-ui/lib/icon-button'
import NavigationClose from 'material-ui/lib/svg-icons/navigation/close'
import FlatButton from 'material-ui/lib/flat-button'
import Divider from 'material-ui/lib/divider'
import Paper from 'material-ui/lib/paper'
import TextField from 'material-ui/lib/text-field'
import ToolBar from './tb.jsx'
import Tasks from './tasks.jsx'
import EditTask from './editTask.jsx'

export default class EditProject extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      _id: props.project ? props.project._id : null,
      projectNumber: props.project ? props.project.projectNumber : null,
      projectName: props.project ? props.project.projectName : null,
      tasks: props.project ? props.project.tasks : [],

			displayEditTask: false,
			taskPayload: '',
      taskEdited: '',
    };
  }

  render() {
    const {error} = this.props;

    const underlineStyle = {
      display: 'none'
    };

    const style = {
      marginLeft: 20,
      opacity: 1
    };

    return (
			<div>
        <ToolBar
          onCancel={this.props.onCancel}
          onSave={this.onSave.bind(this)}
          onNewTask={this.onNewTask.bind(this)}
					/>

				{
          this.state.displayEditTask ?
          <div onKeyPress={this.onNewTaskKeyPress.bind(this)}>
            <EditTask
              task={this.state.taskPayload}
              onCancel={this.onNewTaskCancel.bind(this)}
              onSave={this.onNewTaskSave.bind(this)}
              onChange={this.onNewTaskChange.bind(this)}
              />
          </div>
          : null
        }

				{ error ? <p style={{color: 'red'}}>{error}</p> : null }

        <div onKeyPress={this.onKeyPress.bind(this)}>
          <TextField
            hintText='Project number'
            underlineStyle={underlineStyle}
            style={style}
            onChange={this.projectNumberOnChange.bind(this)}
            value={this.state.projectNumber}
  					/>

  				<Divider />

          <TextField
            hintText='Project name'
            underlineStyle={underlineStyle}
            style={style}
            onChange={this.projectNameOnChange.bind(this)}
            fullWidth
            value={this.state.projectName}
  					/>
        </div>

        <Divider />

        <Tasks
          tasks={this.state.tasks}
          onDelete = {this.onTaskDelete.bind(this)}
          onCopy = {this.onTaskCopy.bind(this)}
          onEdit = {this.onTaskEdit.bind(this)}
					/>
			</div>
    )
  }

  projectNumberOnChange(e) {
    this.setState({projectNumber: e.target.value});
  }

  projectNameOnChange(e) {
    this.setState({projectName: e.target.value});
  }

  onSave() {
    this.props.onSave({
      _id: this.state._id,
      projectNumber: this.state.projectNumber,
      projectName: this.state.projectName,
			tasks: this.state.tasks
    })
  }

  onKeyPress(e) {
    if ((e.which && e.which == 13) || (e.keyCode && e.keyCode == 13)) {
      this.onSave();
    }
  }

  onTaskDelete(task) {
    const removeIndex = this.state.tasks.indexOf(task)
    this.setState({tasks: [ ...this.state.tasks.slice(0, removeIndex),
      ...this.state.tasks.slice(removeIndex + 1)]});
  }

  onTaskCopy(task) {
    this.setState({taskPayload: task, displayEditTask: true});
  }

  onTaskEdit(task) {
    this.setState({taskPayload: task, taskEdited: task, displayEditTask: true});
  }

  onNewTask() {
		this.setState({taskPayload: '', displayEditTask: true});
  }

  componentDidUpdate () {
    const el=document.getElementById('taskInput')
    if (el) {
      el.focus()
    }
  }

  onNewTaskSave() {
    const {taskEdited, taskPayload, tasks} = this.state;
    if (taskEdited) {
      // edit
      if ( !(taskEdited === taskPayload) ) {
        const removeIndex = tasks.indexOf(taskEdited)
        this.setState({
          tasks:
            [
              ...tasks.slice(0, removeIndex),
              taskPayload,
              ...tasks.slice(removeIndex + 1),
            ]
            .sort(),
          taskEdited: ''
        });
      }
    } else {
      // copy, new task
      if (tasks.indexOf(taskPayload)===-1) {
        this.setState({tasks: [...tasks, taskPayload].sort()});
      }
    }
    this.setState({displayEditTask: false});
  }

  onNewTaskCancel() {
    this.setState({displayEditTask: false});
  }

  onNewTaskChange(e) {
    this.setState({taskPayload: e.target.value});
  }

  onNewTaskKeyPress(e) {
    if ((e.which && e.which == 13) || (e.keyCode && e.keyCode == 13)) {
      this.onNewTaskSave(e.target.value);
    }
  }
}

EditProject.propTypes = {
  project: React.PropTypes.object,
  onSave: React.PropTypes.func.isRequired,
  onCancel: React.PropTypes.func.isRequired
};
