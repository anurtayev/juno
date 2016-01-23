import React from 'react';
import {injectDeps} from 'react-simple-di';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {mount} from 'react-mounter';

import MainLayout from '../components/layouts.main/index.jsx';
import Entries from '../containers/entries';
import Edit from '../containers/edit';
import Dashboard from '../components/dashboard/index.jsx';

export const initRoutes = (context, actions) => {
  const MainLayoutCtx = injectDeps(context, actions)(MainLayout);

  // Move these as a module and call this from a main file
  FlowRouter.route('/', {
    name: 'dashboard',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Dashboard/>)
      });
    }
  });

  FlowRouter.route('/entries', {
    name: 'entries',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Entries/>)
      });
    }
  });

  FlowRouter.route('/edit/:entryId', {
    name: 'edit',
    action({entryId}) {
      mount(MainLayoutCtx, {
        content: () => (<Edit entryId={entryId}/>)
      });
    }
  });

};
