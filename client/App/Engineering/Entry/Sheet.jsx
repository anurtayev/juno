App.Engineering.Entry.Sheet = React.createClass({
  
  _rows() {
    return this.props.entries.map( (entry) => {
      return (
        <EntryRow entry={entry} key={entry._id} />
      );
    });
  },
  
  render() {
    return (
      <div id="entriesSheet" className="container-fluid visbox">
        {this._rows()}
      </div>
    );
  }
});