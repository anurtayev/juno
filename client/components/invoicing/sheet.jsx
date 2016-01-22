import React from 'meteor/react';

export default class Sheet extends React.Component {

  _rows() {
    return this.props.entries.map( (entry) => {
      return (
        <AccountingEntryRow entry={entry} key={entry._id} />
      );
    });
  }
  
  render() {
    return (
      <div id="entriesSheet" className="container-fluid visbox">
        {this._rows()}
      </div>
    );
  }
}