import {Accounts} from 'meteor/accounts-base';
import initMethods from '/libs/methods';
import {initContext} from './configs/context';
import {initRoutes} from './configs/routes.jsx';
import actions from './actions';
import injectTapEventPlugin from 'react-tap-event-plugin';

initMethods();
const context = initContext();
initRoutes(context, actions);

//Accounts.ui.config({ passwordSignupFields: 'USERNAME_ONLY' }); // disable

injectTapEventPlugin();
