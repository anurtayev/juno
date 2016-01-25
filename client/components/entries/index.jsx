import React from 'react';
import Table from './table.jsx';

export default class Entries extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <header>
          <button type="button" className="btn btn-primary" onClick={this.navigateNewEntry}>New</button>
          <button type="button" className="btn btn-primary">Invoice</button>
          <p>{this.props.mode}</p>
        </header>
        
        <Table entries={this.props.entries}/>
      </div>
    );
  }
  
  navigateNewEntry(event) {
    console.log(this.props);
    this.props.context.FlowRouter.go('/newentry');
  }
}