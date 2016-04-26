import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import NavigationClose from 'material-ui/lib/svg-icons/navigation/close';
import FlatButton from 'material-ui/lib/flat-button';
import Divider from 'material-ui/lib/divider';
import Paper from 'material-ui/lib/paper';
import TextField from 'material-ui/lib/text-field';
import ToolBar from './tb.jsx';

export default class EditProject extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      _id: props.entry ? props.entry._id : null,
      hours: props.entry ? props.entry.hours : null,
      description: props.entry ? props.entry.description : '',
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
          onCancel={this.props.onCancel}
          onSave={this.onSave.bind(this)}
        />

        {error ? <p style={{color: 'red'}}>{error}</p> : null}
        <Paper zDepth={2} onKeyPress={this.onKeyPress.bind(this)}>

          <TextField
            hintText='Project number'
            underlineStyle={underlineStyle}
            style={style}
            onChange={this.hoursOnChange.bind(this)}
            value={this.state.hours}
          />
          <Divider />

          <TextField
            hintText='Project name'
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

  hoursOnChange(event) {
    this.setState({hours: event.target.value});
  }

  descriptionOnChange(event) {
    this.setState({description: event.target.value});
  }

  onSave() {
    this.props.onSave({
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

EditProject.propTypes = {
  project: React.PropTypes.object,
  onSave: React.PropTypes.func.isRequired,
  onCancel: React.PropTypes.func.isRequired
};
