import moment from 'moment';
import Table from 'material-ui/lib/table/table';
import TableBody from 'material-ui/lib/table/table-body';
import TableFooter from 'material-ui/lib/table/table-footer';
import TableHeader from 'material-ui/lib/table/table-header';
import TableHeaderColumn from 'material-ui/lib/table/table-header-column';
import TableRow from 'material-ui/lib/table/table-row';
import TableRowColumn from 'material-ui/lib/table/table-row-column';

export default EntriesTable = ({entries, deleteEntry, copyEntry, editEntry}) => (
  <Table selectable={false}>
    <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
    
      <TableRow>
        <TableHeaderColumn style={{width: '2rem'}}>&#8230;</TableHeaderColumn>
        <TableHeaderColumn style={{width: '1rem'}}>Date</TableHeaderColumn>
        <TableHeaderColumn style={{width: '2rem'}}>Project#</TableHeaderColumn>
        <TableHeaderColumn style={{width: '8rem'}}>Project Name</TableHeaderColumn>
        <TableHeaderColumn style={{width: '8rem'}}>Task</TableHeaderColumn>
        <TableHeaderColumn style={{width: '1rem'}}>Hours</TableHeaderColumn>
        <TableHeaderColumn style={{width: '5rem'}}>Description</TableHeaderColumn>
      </TableRow>
      
    </TableHeader >
    <TableBody stripedRows showRowHover displayRowCheckbox={false}>
    
      {entries.map( (entry) => (
        
        <TableRow  key={entry._id}>
          {entry.submitted ?
            <TableRowColumn style={{width: '2rem'}}>&#x2713;</TableRowColumn>
          :           
            <TableRowColumn style={{width: '2rem'}}>
              <button onClick={deleteEntry.bind(this, entry._id)} title='Delete'>&times;</button>
              <button onClick={copyEntry.bind(this, entry._id)} title='Copy'>&#x2398;</button>
              <button onClick={editEntry.bind(this, entry._id)} title='Edit'>&#x270D;</button>
            </TableRowColumn>
          }
          
          <TableRowColumn style={{width: '1rem'}}>{moment(entry.date).format('D-MM-YY')}</TableRowColumn>
          <TableRowColumn style={{width: '2rem'}}>{entry.projectNumber}</TableRowColumn>
          <TableRowColumn style={{width: '8rem'}}>{entry.projectName}</TableRowColumn>
          <TableRowColumn style={{width: '8rem'}}>{entry.projectTask}</TableRowColumn>
          <TableRowColumn style={{width: '1rem'}}>{entry.hours}</TableRowColumn>
          <TableRowColumn style={{width: '5rem'}}>{entry.description}</TableRowColumn>

        </TableRow>
        
      ))}
      
    </TableBody>
  </Table>
);

EntriesTable.propTypes = { 
  entries: React.PropTypes.arrayOf( React.PropTypes.object ).isRequired,
  deleteEntry: React.PropTypes.func.isRequired,
  copyEntry: React.PropTypes.func.isRequired,
  editEntry: React.PropTypes.func.isRequired
};