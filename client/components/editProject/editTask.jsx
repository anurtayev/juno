import RaisedButton  from 'material-ui/lib/raised-button'
import AccountsUI from '../accounts-ui/index.jsx'
import Toolbar from 'material-ui/lib/toolbar/toolbar'
import ToolbarGroup from 'material-ui/lib/toolbar/toolbar-group'
import ToolbarTitle from 'material-ui/lib/toolbar/toolbar-title'
import React from 'react'

export default ({onCancel, onSave, task}) =>
	<Table selectable={false}>
    <TableBody displayRowCheckbox={false}>
      <TableRow key={task}>
        <TableRowColumn style={{width: '2rem'}}>
          <button onClick={onSave.bind(this, task)} title='Save'>&#x2713;</button>
          <button onClick={onCancel.bind(this, task)} title='Cancel'>&#x2715;</button>
        </TableRowColumn>

        <TableRowColumn style={{width: '10rem'}}>
					<TextField
						hintText='Project name'
						underlineStyle={{display: none}}
						style={{marginLeft: 20, opacity: 1}}
						onChange={this.projectNameOnChange.bind(this)}
						fullWidth
						value={task}
					/>
				</TableRowColumn>
      </TableRow>
    </TableBody>
  </Table>
