import Accounts from 'meteor/accounts-ui';
import ReactDOM from 'react-dom';
import React  from 'react';
import routes from './configs/routes.jsx';

// Accounts.ui.config({ passwordSignupFields: 'USERNAME_ONLY' });

// const root = document.createElement('div');
// root.setAttribute('id', 'root');
// document.body.appendChild(root);

ReactDOM.render( React.createElement( routes ), document.body );