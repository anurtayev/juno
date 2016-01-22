import React from 'meteor/react';
import {Router, Route, history, IndexRoute} from 'meteor/reactrouter:react-router';
import layout from './components/layout';
import Dashboard from './components/dashboard';


const browserHistory=history.createHistory();

export default class Routes extends React.Component {
  render() {
    <Router history={browserHistory}>
      <Route path='/' component={layout}>
        <IndexRoute components={{ toolbar: null, workbench: Dashboard }}/>
        <Route path='invoicing' components={{ toolbar: AccountingToolbar, workbench: Accounting }}/>
        <Route path='entry' components={{ toolbar: EngineeringToolbar, workbench: Engineering }}/>
        <Route path='query' components={{ toolbar: EngineeringToolbar, workbench: Engineering }}/>
        <Route path='*' component={NoMatch} />
      </Route>
    </Router>
  }
}