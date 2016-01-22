import React from 'meteor/react';
import ReactRouter from 'meteor/reactrouter:react-router';
import layout from '../components/layout/index.jsx';
import dashboard from '../components/dashboard/index.jsx';
import noMatch from '../components/no-match/index.jsx';
import { entry, entryToolbar } from '../components/entry';
import { invoicing, invoicingToolbar } from '../components/invoicing';

console.log('sdfsdfsf');
console.log(ReactRouter);
// const {Router, Route, history, IndexRoute} = ReactRouter;
const browserHistory = ReactRouter.history.createHistory();

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