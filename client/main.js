import Accounts from 'meteor/accounts-ui';
import ReactDOM from 'meteor/react';
import Router from './components/router';

Accounts.ui.config({ passwordSignupFields: 'USERNAME_ONLY' });

const root = document.createElement('div');
root.setAttribute('id', 'root');
document.body.appendChild(root);

ReactDOM.render( Router, root);