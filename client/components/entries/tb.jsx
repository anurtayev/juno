import FlatButton from 'material-ui/lib/flat-button';
import AccountsUI from '../accounts-ui/index.jsx';
import Toolbar from 'material-ui/lib/toolbar/toolbar';
import ToolbarGroup from 'material-ui/lib/toolbar/toolbar-group';
import ToolbarTitle from 'material-ui/lib/toolbar/toolbar-title';
import ToolbarSeparator from 'material-ui/lib/toolbar/toolbar-separator';
import React from 'react';

export default EngineeringToolbar = ({navigateNewEntry, submit, totalHoursStr, sortBy, sortByOnClick}) => (
  <Toolbar>
    <ToolbarGroup firstChild={true} float='left'>
      <AccountsUI/>
      <ToolbarTitle text='Timesheet entry'/>
      <FlatButton label={`Sort by ${sortBy === 'date' ? 'Project#' : 'Date'}`} onTouchTap={sortByOnClick.bind(this, sortBy)}/>
    </ToolbarGroup>
    
    <ToolbarGroup float='right'>
      <ToolbarTitle text={totalHoursStr}/>
      <ToolbarSeparator/>
      <FlatButton label='New' onTouchTap={navigateNewEntry}/>
      <FlatButton label='Submit' onTouchTap={submit}/>
    </ToolbarGroup>
  </Toolbar>
);

EngineeringToolbar.propTypes = {
  sortBy: React.PropTypes.string.isRequired,
  sortByOnClick: React.PropTypes.func.isRequired,
  navigateNewEntry: React.PropTypes.func.isRequired,
  submit: React.PropTypes.func.isRequired,
  totalHoursStr: React.PropTypes.string.isRequired
};