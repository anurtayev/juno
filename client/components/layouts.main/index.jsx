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
  
  getRoutingTable() {
    return {
      elmira: {
        accounting: {
          entrypoint: true
        }
      },
      
      '*': {
        engineering: {
          entrypoint: true
        },
        edit: {},
        newentry: {}
      }
    } 
  }
  
  getAuthorisedRoutes() {
    const rt = this.getRoutingTable();
    console.log(rt);
    
    let match;
    for (let key in rt) {
      if (key === this.props.username) {
        match = key;
      }
    }
    
    match = !match ? '*' : match;
    console.log(`match: ${match}`);
    
    return rt[match];
  }

  route() {
    const route = FlowRouter.getRouteName();
    const username = this.props.username;
    console.log(`inp route: <${route}>, inp username: <${username}>`);
    
    if ( !username ) {
      if ( route !== 'dashboard') {
        FlowRouter.go('/');
      }
      console.log('anonymous, to dashboad...');
      return;
    }
    
    const ar = this.getAuthorisedRoutes();
    
    let authorized = false;
    for (let k in ar) {
      if ( k === route ) {
        authorized = true;
      }
    }
    console.log(`authorized: ${authorized}`);
    
    if (!authorized) {
      // find default entry point
      let dep;
      for (let k in ar) {
        if ( ar[k].entrypoint ) {
          dep = k;
        }
      }
      console.log(`fallback to default entry point: <${dep}>`);
      FlowRouter.go(`/${dep}`);
      return;
    }
  }
  
  render() {
    return this.props.content();
  }
}
