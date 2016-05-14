import Table from 'material-ui/lib/table/table';
import TableBody from 'material-ui/lib/table/table-body';
import TableFooter from 'material-ui/lib/table/table-footer';
import TableHeader from 'material-ui/lib/table/table-header';
import TableHeaderColumn from 'material-ui/lib/table/table-header-column';
import TableRow from 'material-ui/lib/table/table-row';
import TableRowColumn from 'material-ui/lib/table/table-row-column'
import React from 'react'

export default ProjectsTable = ({projects, onDelete, onCopy, onEdit}) => (
  <Table selectable={false}>
    <TableBody stripedRows showRowHover displayRowCheckbox={false}>
      {projects.map( (project) => (
        <TableRow  key={project._id}>
          <TableRowColumn style={{width: '2rem'}}>
            <button onClick={onDelete.bind(null, project._id)} title='Delete'>&times;</button>
            <button onClick={onCopy.bind(null, project._id)} title='Copy'>&#x2398;</button>
            <button onClick={onEdit.bind(null, project._id)} title='Edit'>&#x270D;</button>
          </TableRowColumn>
          <TableRowColumn style={{width: '2rem'}}>{project.projectNumber}</TableRowColumn>
          <TableRowColumn style={{width: '8rem'}}>{project.projectName}</TableRowColumn>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

ProjectsTable.propTypes = {
  projects: React.PropTypes.arrayOf( React.PropTypes.object ).isRequired
};
