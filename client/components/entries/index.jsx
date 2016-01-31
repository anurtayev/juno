import React from 'react';
import EntriesTable from './entriesTable.jsx';
import EngineeringToolbar from './tb.jsx';
import AppBar from 'material-ui/lib/app-bar';
import {useDeps} from 'react-simple-di';

export default Entries = ({entries, actions}) => {
  
  const totalHours = entries.reduce( (previousValue, currentValue, currentIndex, array) => {
    return previousValue + currentValue.hours;
  }, 0);
  
  return (
    <div>
      <EngineeringToolbar 
        navigateNewEntry={actions().entries.navigateNewEntry} 
        submit={actions().entries.submit}
        totalHoursStr={`Total unsubmitted hours: ${totalHours}`}
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
};

Entries.propTypes = { 
  entries: React.PropTypes.arrayOf( React.PropTypes.object ).isRequired
};