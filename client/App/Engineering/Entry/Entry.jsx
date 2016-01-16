App.Engineering.Entry = React.createClass({
  
  render() {
    if (!this.data.entriesReady || !this.data.tasksReady || !this.data.projectsReady) {
      return (
        <div>loading...</div>
      );
    }
    
    return (
      <div className='container-fluid contbox'>
      
        <EntryForm projects={this.data.projects} tasks={this.data.tasks} />
        
        {this.data.entries.length === 0 ? null : <EntriesSheet entries={this.data.entries} />}
        
        {this.data.entries.length === 0 ? null : <EntryActionBar />}
        
      </div>
    );
  }
});