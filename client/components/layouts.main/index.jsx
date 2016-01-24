import React from 'react';
import AccountsUI from '../accounts-ui/index.jsx';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {Meteor} from 'meteor/meteor';

export default class MainLayout extends React.Component {
  
  componentDidUpdate() {
    this.route();
  }
  
  componentDidMount() {
    this.route();
  }
  
  route() {
    console.log('routing...');
    const route = FlowRouter.getRouteName();
    const username = this.props.username;
    
    if ( username && (route !== 'entries') ) {
      console.log('to entries');
      FlowRouter.go('/entries');
    }
    
    if ( !username && (route !== 'dashboard') ) {
      console.log('to dashboard');
      FlowRouter.go('/');
    }
  }
  
  render() {
    return (
      <div>
        <header>
          <AccountsUI/>
        </header>
        <div>
          {this.props.content()}
        </div>
      </div>
    );
  }
}
