import React from 'react';

export default class TimesheetEntry extends React.Component {
  
  render() {
    if ( !this.data.projects.ready || !this.data.timesheets.ready ) {
      return <div>loading...</div>;
    }
    
    return (
      <div className='container-fluid contbox'>
      
        <EntryForm projects={this.data.projects} tasks={this.data.tasks} />
        
        {this.data.entries.length === 0 ? null : <EntriesSheet entries={this.data.entries} />}
        
        {this.data.entries.length === 0 ? null : <EntryActionBar />}
        
      </div>
    );
  }
}