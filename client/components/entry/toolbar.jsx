import React from 'meteor/react';

export default class EngineeringToolbar extends React.Component {

  handleSubmit() {
    Meteor.call('submit');
  }
  
  render() {
    return (
      <div id="actionBar" className="container-fluid visbox">
        <button type="button" className="btn btn-success" onClick={this.handleSubmit} >Submit entries</button>
      </div>
    );
  }

}