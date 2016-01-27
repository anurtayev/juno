import React from 'react';
import EntriesTable from './entriesTable.jsx';
import AppBar from 'material-ui/lib/app-bar';
import FlatButton from 'material-ui/lib/flat-button';

export class Entries extends React.Component {
  render() {
    console.log(this.props);
    console.log(this.props.entries);
    console.log(this.props.entries.length);
    return (
      <div>
        <AppBar
          title={<span>Timesheet entries</span>}
          iconElementRight={
            <span>
              <FlatButton label="New" onTouchTap={this.navigateNewEntry.bind(this)}/>
              <FlatButton label="Submit"/>
            </span>
          }
        />
        
        {this.props.entries.length === 0 ? null : <EntriesTable entries={this.props.entries}/>}
      </div>
    );
  }
  
  navigateNewEntry() {
    this.props.context().FlowRouter.go('/newentry');
  }
}

Counter.propTypes = { 
  mode: React.PropTypes.string.isRequired,
  entries: React.PropTypes.arrayOf( React.PropTypes.object ).isRequired
};

export default Entries;
