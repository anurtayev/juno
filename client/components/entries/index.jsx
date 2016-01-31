import React from 'react';
import EntriesTable from './entriesTable.jsx';
import EntriesActions from './entriesActions.jsx';
import AppBar from 'material-ui/lib/app-bar';
import {useDeps} from 'react-simple-di';

export default Entries = ({mode, entries, actions}) => (
  <div>
    <AppBar
      title={<span>Timesheet entries</span>}
      iconElementRight={<EntriesActions navigateNewEntry={actions().entries.navigateNewEntry} submit={actions().entries.submit}/>}
    />
    
    {entries.length === 0 ? null : 
      <EntriesTable 
        entries={entries}
        deleteEntry={actions().entries.deleteEntry}
        copyEntry={actions().entries.copyEntry}
        editEntry={actions().entries.editEntry}
      />
    }
  </div>
);

Entries.propTypes = { 
  // mode: React.PropTypes.string.isRequired,
  entries: React.PropTypes.arrayOf( React.PropTypes.object ).isRequired
};