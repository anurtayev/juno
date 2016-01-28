import React from 'react';
import EntriesTable from './entriesTable.jsx';
import EntriesActions from './entriesActions.jsx';
import AppBar from 'material-ui/lib/app-bar';

const Entries = ({mode, entries, navigateNewEntry}) => (
  <div>
    <AppBar
      title={<span>Timesheet entries</span>}
      iconElementRight={<EntriesActions navigateNewEntry={navigateNewEntry}/>}
    />
    
    {entries.length === 0 ? null : <EntriesTable entries={entries}/>}
  </div>
)

Entries.propTypes = { 
  mode: React.PropTypes.string.isRequired,
  entries: React.PropTypes.arrayOf( React.PropTypes.object ).isRequired,
  navigateNewEntry: React.PropTypes.func.isRequired
};

export default Entries;
