import RaisedButton  from 'material-ui/lib/raised-button'
import AccountsUI from '../accounts-ui/index.jsx'
import Toolbar from 'material-ui/lib/toolbar/toolbar'
import ToolbarGroup from 'material-ui/lib/toolbar/toolbar-group'
import ToolbarTitle from 'material-ui/lib/toolbar/toolbar-title'
import React from 'react'

export default ({onInvoicing, onNewProject}) =>
  <Toolbar>
    <ToolbarGroup float='left'>
      <AccountsUI/>
      <ToolbarTitle text='Projects Entries'/>
    </ToolbarGroup>

    <ToolbarGroup float='right'>
			<RaisedButton  label='Invoicing' onTouchTap={onInvoicing}/>
      <RaisedButton  label='New Project' onTouchTap={onNewProject}/>
    </ToolbarGroup>
  </Toolbar>
