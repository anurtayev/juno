import Papa from 'meteor/harrison:papa-parse';
import saveAs from 'meteor/pfafman:filesaver';

export default {
  invoice({Meteor, LocalState, FlowRouter, Collections}) {
    let csvString = Papa.unparse(Collections.Entries.find({}).fetch(), { newline: "\r\n" });
    saveAs(new Blob([csvString], { type: "text/plain;charset=utf-8" }), 'export.csv');
    Meteor.call('invoice');
    FlowRouter.go(`/invoicing`);
  }
};
