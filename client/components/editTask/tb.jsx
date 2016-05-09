import RaisedButton  from 'material-ui/lib/raised-button'
import AccountsUI from '../accounts-ui/index.jsx'
import Toolbar from 'material-ui/lib/toolbar/toolbar'
import ToolbarGroup from 'material-ui/lib/toolbar/toolbar-group'
import ToolbarTitle from 'material-ui/lib/toolbar/toolbar-title'
import React from 'react'

export default ({cancelAction, saveAction}) => (
  <Toolbar>
    <ToolbarGroup float='left'>
      <AccountsUI/>
      <ToolbarTitle text='Edit Task'/>
    </ToolbarGroup>

    <ToolbarGroup float='right'>
      <RaisedButton  label='Save' onTouchTap={saveAction}/>
      <RaisedButton  label='Cancel' onTouchTap={cancelAction} primary/>
    </ToolbarGroup>
  </Toolbar>
)
