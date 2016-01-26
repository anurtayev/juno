import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import NavigationClose from 'material-ui/lib/svg-icons/navigation/close';
import FlatButton from 'material-ui/lib/flat-button';

import Divider from 'material-ui/lib/divider';
import Paper from 'material-ui/lib/paper';
import TextField from 'material-ui/lib/text-field';

export default class Edit extends React.Component {
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
          iconElementLeft={<IconButton onTouchTap={this.handleSubmit.bind(this)}><NavigationClose /></IconButton>}
          iconElementRight={<FlatButton label="Save" />}
        />
          
        {error ? <p style={{color: 'red'}}>{error}</p> : null}
        <Paper zDepth={2}>
          <TextField ref='dateRef' hintText="Date" underlineStyle={underlineStyle} style={style} />
          <Divider />
          <TextField hintText="Project" underlineStyle={underlineStyle} style={style} />
          <Divider />
          <TextField hintText="Task" underlineStyle={underlineStyle} style={style} />
          <Divider />
          <TextField hintText="Hours" underlineStyle={underlineStyle} style={style} />
          <Divider />
          <TextField hintText="Description" underlineStyle={underlineStyle} style={style} />
          <Divider />
        </Paper>
      </div>
    )
  }
  
  handleSubmit(event) {
    console.log('laskdlfasdjkfldsakjlasdjflsdjfkd11111111');
    
    this.props.actions().entries.insert({
      date: this.refs.dateRef.value,
      projectCode: this.refs.dateRef.value,
      projectName: this.refs.dateRef.value,
      projecTask: this.refs.dateRef.value,
      hours: this.refs.dateRef.value,
      description: this.refs.dateRef.value,
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
}