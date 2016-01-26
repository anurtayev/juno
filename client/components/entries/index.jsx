import React from 'react';
import Table from './table.jsx';

export default class Entries extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <header>
          <button type="button" className="btn btn-primary" onClick={this.navigateNewEntry.bind(this)}>New</button>
          <button type="button" className="btn btn-primary">Invoice</button>
          <p>{this.props.mode}</p>
        </header>
        
        <Table entries={this.props.entries}/>
      </div>
    );
  }
  
  navigateNewEntry(context) {
    this.props.context().FlowRouter.go('/newentry');
  }
}