import Table from 'material-ui/lib/table/table';
import TableBody from 'material-ui/lib/table/table-body';
import TableFooter from 'material-ui/lib/table/table-footer';
import TableHeader from 'material-ui/lib/table/table-header';
import TableHeaderColumn from 'material-ui/lib/table/table-header-column';
import TableRow from 'material-ui/lib/table/table-row';
import TableRowColumn from 'material-ui/lib/table/table-row-column'
import React from 'react'

export default ({tasks, onDelete, onCopy, onEdit}) =>
  <Table selectable={false}>
    <TableBody stripedRows showRowHover displayRowCheckbox={false}>
      {
        tasks ?
        tasks.map(task =>
          <TableRow  key={task}>
            <TableRowColumn style={{width: '2rem'}}>
              <button onClick={onDelete.bind(this, task)} title='Delete'>&#x2715;</button>
              <button onClick={onCopy.bind(this, task)} title='Copy'>&#x2398;</button>
              <button onClick={onEdit.bind(this, task)} title='Edit'>&#x270D;</button>
            </TableRowColumn>
            <TableRowColumn style={{width: '10rem'}}>{task}</TableRowColumn>
          </TableRow>
        ) :
        null
      }
    </TableBody>
  </Table>
