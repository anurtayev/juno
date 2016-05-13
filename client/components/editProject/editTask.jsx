import React from 'react'
import Table from 'material-ui/lib/table/table'
import TableBody from 'material-ui/lib/table/table-body'
import TableFooter from 'material-ui/lib/table/table-footer'
import TableRow from 'material-ui/lib/table/table-row'
import TableRowColumn from 'material-ui/lib/table/table-row-column'
import TextField from 'material-ui/lib/text-field';

export default ({onCancel, onSave, task, onChange}) =>
	<Table selectable={false} style={{backgroundColor: '#ff9933'}}>
    <TableBody displayRowCheckbox={false}>
      <TableRow>
        <TableRowColumn style={{width: '2rem'}}>
          <button onClick={onSave} title='Save'>&#x2713;</button>
          <button onClick={onCancel} title='Cancel'>&#x2715;</button>
        </TableRowColumn>

        <TableRowColumn style={{width: '10rem'}}>
					<TextField
						id='taskInput'
						hintText='Task name'
						underlineStyle={{display: 'none'}}
						style={{opacity: 1}}
						onChange={onChange}
						fullWidth
						value={task}
						/>
				</TableRowColumn>
      </TableRow>
    </TableBody>
  </Table>
