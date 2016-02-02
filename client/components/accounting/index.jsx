import React from 'react';
import EntriesTable from './entriesTable.jsx';
import AccountingToolBar from './tb.jsx';

export default Entries = ({entries, actions}) => (
  <div>
  
    <AccountingToolBar
      doInvoice={actions().invoicing.doInvoice}
      wipeOut={actions().invoicing.wipeOut}
    />
    
    {entries.length === 0 ? null : <EntriesTable entries={entries}/>}
    
  </div>
);

Entries.propTypes = { 
  entries: React.PropTypes.arrayOf( React.PropTypes.object ).isRequired
};