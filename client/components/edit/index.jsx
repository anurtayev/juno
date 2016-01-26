import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import NavigationClose from 'material-ui/lib/svg-icons/navigation/close';
import FlatButton from 'material-ui/lib/flat-button';

import Divider from 'material-ui/lib/divider';
import Paper from 'material-ui/lib/paper';
import TextField from 'material-ui/lib/text-field';
import DatePicker from 'material-ui/lib/date-picker/date-picker';

export default class Edit extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {date: null};
  }
  
  render() {
    const {error} = this.props;
    
    const underlineStyle = {
      display: 'none',
    };
    
    const style = {
      marginLeft: 20,
    };

    return (
      <div>
        <AppBar
          title={<span>Title</span>}
          iconElementLeft={<IconButton onTouchTap={this.handleCancel.bind(this)}><NavigationClose /></IconButton>}
          iconElementRight={<FlatButton label="Save" onTouchTap={this.handleSubmit.bind(this)}/>}
        />
          
        {error ? <p style={{color: 'red'}}>{error}</p> : null}
        <Paper zDepth={2}>
          <DatePicker ref='dateRef' hintText="Date" autoOk={true} value={this.state.date} onChange={this.dateOnChange.bind(this)} container="inline" style={style} underlineStyle={underlineStyle}/>
          <Divider />
          <TextField hintText="Project" underlineStyle={underlineStyle} style={style} />
          <Divider />
          <TextField hintText="Task" underlineStyle={underlineStyle} style={style} />
          <Divider />
          <TextField ref='hoursRef' hintText="Hours" underlineStyle={underlineStyle} style={style} />
          <Divider />
          <TextField ref='descriptionRef' hintText="Description" underlineStyle={underlineStyle} style={style} />
          <Divider />
        </Paper>
      </div>
    )
  }
  
  handleSubmit() {
    this.props.actions().entries.insert({
      date: this.state.date,
      projectCode: this.refs.dateRef.value,
      projectName: this.refs.dateRef.value,
      projecTask: this.refs.dateRef.value,
      hours: this.refs.hoursRef.getValue(),
      description: this.refs.descriptionRef.getValue(),
      submited: false,
      invoiced: false,
      createdAt: new Date(),
      userId: this.props.context().Meteor.userId(),
      username: this.props.context().Meteor.user().username
    });
    
    this.navigate(this.props.context().FlowRouter);
  }

  handleCancel() {
    this.navigate(this.props.context().FlowRouter);
  }
  
  navigate(router) {
    router.go('/engineering');
  }
  
  dateOnChange(event, date) {
    this.setState({date: date});
  }
}