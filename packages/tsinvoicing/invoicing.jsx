Invoicing = React.createClass({
  
  mixins: [ReactMeteorData],
  
  getMeteorData() {
    const accountingDataHandle = Meteor.subscribe('accounting');
    
    return {
      accountingReady: accountingDataHandle.ready(),
      accountingData: Entries.find({ invoiced: false, submited: true }).fetch(),
    };
  },
  
  render() {
    if (!this.data.accountingReady) {
      return (
        <div>loading...</div>
      );
    }
    
    return (
      <div id="entryScreen" className="container-fluid contbox">
      
        {this.data.accountingData.length === 0 ? null : <AccountingEntriesSheet entries={this.data.accountingData} />}
        
        {this.data.accountingData.length === 0 ? null : <AccountingActionBar />}
        
      </div>
    );
  }
});