import React from 'meteor/react';

default export class Accounting extends React.Component {
  render() {
    return (
      <div className='container-fluid visbox'>
      qqq
        {this.props.children}
      </div>
    );
  }
}