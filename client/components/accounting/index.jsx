import React from 'react';
import EntriesTable from './entriesTable.jsx';
import EntriesActions from './entriesActions.jsx';
import AppBar from 'material-ui/lib/app-bar';
import {useDeps} from 'react-simple-di';

export default Entries = ({entries, actions}) => (
  <div>
    <AppBar
      title={<span>Invoicing</span>}
      iconElementRight={<EntriesActions doInvoice={actions().invoicing.doInvoice}/>}
    />
    
    {entries.length === 0 ? null : 
      <EntriesTable entries={entries}/>
    }
  </div>
);

Entries.propTypes = { 
  entries: React.PropTypes.arrayOf( React.PropTypes.object ).isRequired
};