import React from 'meteor/react';
import {Router, Route, history, IndexRoute} from 'meteor/reactrouter:react-router';
import layout from '../components/layout';
import dashboard from '../components/dashboard';
import noMatch from '../components/no-match';
import { entry, entryToolbar } from '../components/entry';
import { invoicing, invoicingToolbar } from '../components/invoicing';


const browserHistory=history.createHistory();

export default class Routes extends React.Component {
  render() {
    <Router history={browserHistory}>
      <Route path='/' component={layout}>
        <IndexRoute components={{ toolbar: null, workbench: dashboard }}/>
        <Route path='invoicing' components={{ toolbar: invoicingToolbar, workbench: invoicing }}/>
        <Route path='entry' components={{ toolbar: entryToolbar, workbench: entry }}/>
        <Route path='*' component={noMatch} />
      </Route>
    </Router>
  }
}