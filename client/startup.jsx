const {Router, Route, history, IndexRoute} = ReactRouter;

const browserHistory=history.createHistory();

Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY'
});

Meteor.startup( () => {
  ReactDOM.render((
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Dashboard}/>
        <Route path='accounting' component={Accounting}>
          <IndexRoute component={Invoicing}/>
          <Route path='invoicing' component={Invoicing} />
        </Route>
        <Route path='engineering' component={Engineering}>
          <IndexRoute component={TimesheetEntry}/>
          <Route path='entry' component={TimesheetEntry} />
        </Route>
        <Route path='*' component={NoMatch} />
      </Route>
    </Router>
  ), root);
});