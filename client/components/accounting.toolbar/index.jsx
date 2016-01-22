import React from 'meteor/react';

default export class AccountingToolbar extends React.Component {
  render() {
    return (
      <div className='container-fluid visbox'>
        <AccountsUI />
        <h1>Timesheet entry</h1>
      </div>
    );
  }
}