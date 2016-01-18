const {Router, Route, history, IndexRoute} = ReactRouter;

const browserHistory=history.createHistory();

Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY'
});

Meteor.startup( () => {
  ReactDOM.render((
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute components={{ toolbar: null, workbench: Dashboard }}/>
        <Route path='accounting' components={{ toolbar: AccountingToolbar, workbench: Accounting }}>
          <IndexRoute component={Invoicing}/>
          <Route path='invoicing' component={Invoicing} />
        </Route>
        <Route path='engineering' components={{ toolbar: EngineeringToolbar, workbench: Engineering }}>
          <IndexRoute component={Entry}/>
          <Route path='entry' component={Entry} />
        </Route>
        <Route path='*' component={NoMatch} />
      </Route>
    </Router>
  ), root);
});