const {Router, Route, history, IndexRoute} = ReactRouter;

const browserHistory=history.createHistory();

Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY'
});

Meteor.startup(function() {
  
  StartupHelper.initAppTag();
  
  ReactDOM.render((
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={App.Dashboard}/>
        <Route path='accounting' component={App.Accounting}>
          <IndexRoute component={App.Accounting.Invoicing}/>
          <Route path='invoicing' component={App.Accounting.Invoicing} />
          <Route path='query' component={App.Accounting.Query} />
        </Route>
        <Route path='engineering' component={App.Engineering}>
          <IndexRoute component={App.Engineering.Entry}/>
          <Route path='entry' component={App.Engineering.Entry} />
          <Route path='query' component={App.Engineering.Query} />
        </Route>
        <Route path='*' component={App.NoMatch} />
      </Route>
    </Router>
  ), root);
});

const StartupHelper = {
  
  initAppTag() {
    const root = document.createElement('div');
    root.setAttribute('id', 'root');
    document.body.appendChild(root);
  }
  
}
