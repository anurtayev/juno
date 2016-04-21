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
      'elmiranurtayev@gmail.com': {
        accounting: {
          entrypoint: true
        },
        projectsentries: {}
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

    let match;
    for (let key in rt) {
      if (key === this.props.username) {
        match = key;
      }
    }

    match = !match ? '*' : match;
    return rt[match];
  }

  route() {
    const route = FlowRouter.getRouteName();
    const username = this.props.username;

    if ( !username ) {
      if ( route !== 'dashboard') {
        FlowRouter.go('/');
      }
      return;
    }

    const ar = this.getAuthorisedRoutes();

    let authorized = false;
    for (let k in ar) {
      if ( k === route ) {
        authorized = true;
      }
    }

    if (!authorized) {
      // find default entry point
      let dep;
      for (let k in ar) {
        if ( ar[k].entrypoint ) {
          dep = k;
        }
      }
      FlowRouter.go(`/${dep}`);
      return;
    }
  }

  render() {
    return this.props.content();
  }
}
