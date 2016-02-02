import Papa from 'papaparse';
import FileSaver from 'filesaver.js';

export default {
  doInvoice({Meteor, LocalState, FlowRouter, Collections}) {
    const csvString = Papa.unparse(Collections.Entries.find({}).fetch(), { newline: '\r\n' });
    FileSaver.saveAs(new Blob([csvString], { type: 'text/plain;charset=utf-8' }), 'export.csv');
    Meteor.call('entries.invoice');
    // FlowRouter.go(`/accounting`);
  },
  
  wipeOut({Meteor}) {
    if (confirm('This will WIPE OUT all submitted and invoiced entries!')) {
      Meteor.call('entries.wipeOut');
    }
  }
};
