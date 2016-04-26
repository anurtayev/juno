import RaisedButton  from 'material-ui/lib/raised-button';
import AccountsUI from '../accounts-ui/index.jsx';
import Toolbar from 'material-ui/lib/toolbar/toolbar';
import ToolbarGroup from 'material-ui/lib/toolbar/toolbar-group';
import ToolbarTitle from 'material-ui/lib/toolbar/toolbar-title';
import React from 'react';

export default EngineeringToolbar = ({onCancel, onSave}) => (
  <Toolbar>
    <ToolbarGroup float='left'>
      <AccountsUI/>
      <ToolbarTitle text='Edit entry'/>
    </ToolbarGroup>

    <ToolbarGroup float='right'>
      <RaisedButton  label='Save' onTouchTap={onSave}/>
      <RaisedButton  label='Cancel' onTouchTap={onCancel} primary/>
    </ToolbarGroup>
  </Toolbar>
);

EngineeringToolbar.propTypes = {
  onCancel: React.PropTypes.func.isRequired,
  onSave: React.PropTypes.func.isRequired
};
