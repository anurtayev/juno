import moment from 'moment';
import Table from 'material-ui/lib/table/table';
import TableBody from 'material-ui/lib/table/table-body';
import TableFooter from 'material-ui/lib/table/table-footer';
import TableHeader from 'material-ui/lib/table/table-header';
import TableHeaderColumn from 'material-ui/lib/table/table-header-column';
import TableRow from 'material-ui/lib/table/table-row';
import TableRowColumn from 'material-ui/lib/table/table-row-column';

const EntriesTable = ({entries}) => (
  <Table>
    <TableHeader >
    
      <TableRow>
        <TableHeaderColumn>&#8230;</TableHeaderColumn>
        <TableHeaderColumn>Date</TableHeaderColumn>
        <TableHeaderColumn>Code</TableHeaderColumn>
        <TableHeaderColumn>Title</TableHeaderColumn>
        <TableHeaderColumn>Task</TableHeaderColumn>
        <TableHeaderColumn>Hours</TableHeaderColumn>
        <TableHeaderColumn>Description</TableHeaderColumn>
        <TableHeaderColumn>Created</TableHeaderColumn>
      </TableRow>
      
    </TableHeader >
    <TableBody>
    
      {entries.map( (entry) => (
        
        <TableRow  key={entry._id}>
        
          <TableRowColumn><p>{moment(entry.createdAt).format('D-MM-YY')}</p></TableRowColumn>
          <TableRowColumn><p>aaa</p></TableRowColumn>
          <TableRowColumn><p>{entry.projectCode}</p></TableRowColumn>
          <TableRowColumn><p>{entry.projectTitle}</p></TableRowColumn>
          <TableRowColumn><p>{entry.projecTask}</p></TableRowColumn>
          <TableRowColumn><p>{entry.hours}</p></TableRowColumn>
          <TableRowColumn><p>{entry.description}</p></TableRowColumn>
          <TableRowColumn><p>iii</p></TableRowColumn>

        </TableRow>
        
      ))}
      
    </TableBody>
  </Table>
);

EntriesTable.propTypes = { 
  entries: React.PropTypes.arrayOf( React.PropTypes.object ).isRequired
};

export default EntriesTable;