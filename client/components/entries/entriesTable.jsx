import moment from 'meteor/momentjs:moment';
import Table from 'material-ui/lib/table/table';
import TableBody from 'material-ui/lib/table/table-body';
import TableFooter from 'material-ui/lib/table/table-footer';
import TableHeader from 'material-ui/lib/table/table-header';
import TableHeaderColumn from 'material-ui/lib/table/table-header-column';
import TableRow from 'material-ui/lib/table/table-row';
import TableRowColumn from 'material-ui/lib/table/table-row-column';

export default (props) => (
  <Table className='table'>
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
    
      {props.entries.map( entry => (
        <TableRow  key={entry._id}>
          <TableRowColumn>
            <button className="edit"  onClick={this.copyEntry}>&#x270e;</button>
            <button className="copy"  onClick={this.copyEntry}>&#x2398;</button>
            <button className="delete" onClick={this.deleteEntry}>&times;</button>
          </TableRowColumn>
          <TableRowColumn>{entry.date}</TableRowColumn>
          <TableRowColumn>{entry.projectCode}</TableRowColumn>
          <TableRowColumn>{entry.projectName}</TableRowColumn>
          <TableRowColumn>{entry.projecTask}</TableRowColumn>
          <TableRowColumn>{entry.hours}</TableRowColumn>
          <TableRowColumn>{entry.description}</TableRowColumn>
          <TableRowColumn className="col-xs-2">{moment(this.props.entry.createdAt).format('D-MM-YY, hh:mm')}</TableRowColumn>

        </TableRow>
      ))}
      
    </TableBody>
  </Table>
);