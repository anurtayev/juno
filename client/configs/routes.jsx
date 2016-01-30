import React from 'react';
import {injectDeps} from 'react-simple-di';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {mount} from 'react-mounter';

import MainLayout from '../containers/layout';
import EngineeringEntries from '../containers/engineeringEntries';
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

  FlowRouter.route('/engineering', {
    name: 'engineering',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<EngineeringEntries/>)
      });
    }
  });

  FlowRouter.route('/accounting', {
    name: 'accounting',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Entries mode='accounting'/>)
      });
    }
  });

  FlowRouter.route('/edit/:entryId', {
    name: 'edit',
    action({entryId}) {
      mount(MainLayoutCtx, {
        content: () => (<Edit entry={entry}/>)
      });
    }
  });

  FlowRouter.route('/newentry', {
    name: 'newentry',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Edit/>)
      });
    }
  });

};
