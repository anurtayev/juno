import Accounts from 'meteor/accounts-ui';
import ReactDOM from 'meteor/react';
import routes from './configs/routes';

Accounts.ui.config({ passwordSignupFields: 'USERNAME_ONLY' });

const root = document.createElement('div');
root.setAttribute('id', 'root');
document.body.appendChild(root);

ReactDOM.render( routes, root);