import React from 'react';

export default class InvoicingToolbar extends React.Component {
  
  saveInvoice() {
    let csvString = Papa.unparse(Entries.find({}).fetch(), { newline: "\r\n" });
    saveAs(new Blob([csvString], { type: "text/plain;charset=utf-8" }), 'export.csv');
  }
  
  handleSubmit() {
    this.saveInvoice();
    Meteor.call('invoice');
  }
  
  render() {
    return (
      <div id="actionBar" className="container-fluid visbox">
        <button type="button" className="btn btn-success" onClick={this.handleSubmit} >Invoice</button>
      </div>
    );
  }

}