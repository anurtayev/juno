import RaisedButton  from 'material-ui/lib/raised-button';
import AccountsUI from '../accounts-ui/index.jsx';
import Toolbar from 'material-ui/lib/toolbar/toolbar';
import ToolbarGroup from 'material-ui/lib/toolbar/toolbar-group';
import ToolbarTitle from 'material-ui/lib/toolbar/toolbar-title';
import React from 'react';

export default EngineeringToolbar = ({doInvoice, wipeOut}) => (
  <Toolbar>
    <ToolbarGroup float='left'>
      <AccountsUI/>
      <ToolbarTitle text='Invoicing'/>
    </ToolbarGroup>
    
    <ToolbarGroup float='right'>
      <RaisedButton  label='Invoice' onTouchTap={doInvoice}/>
      <RaisedButton  label='Wipe out' onTouchTap={wipeOut} primary/>
    </ToolbarGroup>
  </Toolbar>
);

EngineeringToolbar.propTypes = {
  doInvoice: React.PropTypes.func.isRequired,
  wipeOut: React.PropTypes.func.isRequired
};