// import Accounts from 'meteor/accounts-ui';
import initMethods from './configs/method_stubs';
import {initContext} from './configs/context';
import {initRoutes} from './configs/routes.jsx';
import actions from './actions';

initMethods();
const context = initContext();
initRoutes(context, actions);

// Accounts.ui.config({ passwordSignupFields: 'USERNAME_ONLY' });