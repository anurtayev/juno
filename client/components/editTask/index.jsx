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
import ToolBar from './tb.jsx'

export default class Edit extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      task: props.task
    }
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
          saveAction={this.saveEntry.bind(this)}
        />

        {error ? <p style={{color: 'red'}}>{error}</p> : null}
        <Paper zDepth={2} onKeyPress={this.onKeyPress.bind(this)}>
          <TextField
            hintText='Task name'
            underlineStyle={underlineStyle}
            style={style}
            onChange={this.hoursOnChange.bind(this)}
            value={this.state.hours}
          />
        </Paper>
      </div>
    )
  }

  onTaskChange(e {
    this.setState({task: e.target.value});
  }

  saveEntry() {
    this.props.saveEntry({
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
    })
  }

  onKeyPress(e) {
    if ((e.which && e.which == 13) || (e.keyCode && e.keyCode == 13)) {
      this.saveEntry();
    }
  }
}
