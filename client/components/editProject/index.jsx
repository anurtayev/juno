import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import NavigationClose from 'material-ui/lib/svg-icons/navigation/close';
import FlatButton from 'material-ui/lib/flat-button';
import Divider from 'material-ui/lib/divider';
import Paper from 'material-ui/lib/paper';
import TextField from 'material-ui/lib/text-field';
import ToolBar from './tb.jsx'
import Tasks from './tasks.jsx'
import { StickyContainer, Sticky } from 'react-sticky'

export default class EditProject extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      _id: props.project ? props.project._id : null,
      projectNumber: props.project ? props.project.projectNumber : null,
      projectName: props.project ? props.project.projectName : null,
      tasks: props.project ? props.project.tasks : []
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
      <StickyContainer>

        <Sticky>
          <ToolBar
            onCancel={this.props.onCancel}
            onSave={this.onSave.bind(this)}
            onNewTask={this.onNewTask}
          />
        </Sticky>

        {error ? <p style={{color: 'red'}}>{error}</p> : null}
        <Paper zDepth={2} onKeyPress={this.onKeyPress.bind(this)}>

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
          <Divider />

          <Tasks
            tasks={this.state.tasks}
            onDelete = {this.onTaskDelete}
            onCopy = {this.onTaskCopy}
            onEdit = {this.onTaskEdit}
          />
        </Paper>
      </StickyContainer>
    )
  }

  projectNumberOnChange(event) {
    this.setState({projectNumber: event.target.value});
  }

  projectNameOnChange(event) {
    this.setState({projectName: event.target.value});
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

  onTaskDelete() {

  }

  onTaskCopy() {

  }

  onTaskEdit() {

  }

  onNewTask() {
    console.log("hey now!");
    const el = document.getElementById("q1q1");
    console.log(el.getAttribute("name"));

    el.appendChild(<div><input type="text"></input></div>)
  }
}

EditProject.propTypes = {
  project: React.PropTypes.object,
  onSave: React.PropTypes.func.isRequired,
  onCancel: React.PropTypes.func.isRequired
};
