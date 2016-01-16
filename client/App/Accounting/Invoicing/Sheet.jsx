AccountingEntriesSheet = React.createClass({
  
  propTypes: {
    entries: React.PropTypes.arrayOf( React.PropTypes.object ).isRequired
  },
  
  _rows() {
    return this.props.entries.map( (entry) => {
      return (
        <AccountingEntryRow entry={entry} key={entry._id} />
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