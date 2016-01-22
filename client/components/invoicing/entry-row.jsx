import React from 'react';

export default class EntryRow extends React.Component {

  render() {
    return (
      <div id="entryRow" className="row">
        <div className="col-xs-1">{this.props.entry.username}</div>
        <div className="col-xs-1">{this.props.entry.projectCode}</div>
        <div className="col-xs-2">{this.props.entry.projectTitle}</div>
        <div className="col-xs-2">{this.props.entry.task}</div>
        <div className="col-xs-1">{this.props.entry.hours}</div>
        <div className="col-xs-3">{this.props.entry.description}</div>
        <div className="col-xs-2">{moment(this.props.entry.createdAt).format('D-MM-YY, hh:mm')}</div>
      </div>    
    );
  }
}