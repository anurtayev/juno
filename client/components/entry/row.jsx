import React from 'meteor/react';

export default class EntryRow extends React.Component {
  
  deleteEntry() {
    Meteor.call('deleteEntry', this.props.entry._id);
  }
  
  copyEntry() {
    Meteor.call('copyEntry', this.props.entry._id);
  }
  
  render() {
    return (
      <div id="entryRow" className="row">
        <div className="col-xs-1">
          <button className="delete" onClick={this.deleteEntry}>&times;</button>
          <button className="copy"  onClick={this.copyEntry}>&#x2398;</button>
        </div>
        <div className="col-xs-2">{this.props.entry.projectTitle}</div>
        <div className="col-xs-3">{this.props.entry.task}</div>
        <div className="col-xs-1">{this.props.entry.hours}</div>
        <div className="col-xs-3">{this.props.entry.description}</div>
        <div className="col-xs-2">{moment(this.props.entry.createdAt).format('D-MM-YY, hh:mm')}</div>
      </div>    );
  }
}