import FlatButton from 'material-ui/lib/flat-button';
import AccountsUI from '../accounts-ui/index.jsx';
import React from 'react';

export default EntriesActions = ({navigateNewEntry, submit, style}) => (
  <div>
    <AccountsUI/>
    <FlatButton label="New" onTouchTap={navigateNewEntry} style={style} />
    <FlatButton label="Submit" onTouchTap={submit} style={style} />
  </div>
);

EntriesActions.displayName = 'FlatButton';

EntriesActions.propTypes = {
  navigateNewEntry: React.PropTypes.func.isRequired,
  submit: React.PropTypes.func.isRequired
};