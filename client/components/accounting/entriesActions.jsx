import FlatButton from 'material-ui/lib/flat-button';
import AccountsUI from '../accounts-ui/index.jsx';
import React from 'react';

export default EntriesActions = ({doInvoice, style}) => (
  <div>
    <AccountsUI/>
    <FlatButton label="Invoice" onTouchTap={doInvoice} style={style} />
  </div>
);

EntriesActions.displayName = 'FlatButton';

EntriesActions.propTypes = {
  doInvoice: React.PropTypes.func.isRequired
};