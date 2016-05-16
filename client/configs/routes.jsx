import React from 'react';
import {injectDeps} from 'react-simple-di';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {mount} from 'react-mounter';

import MainLayout from '../containers/layout';
import EngineeringEntries from '../containers/engineeringEntries';
import AccountingEntries from '../containers/accountingEntries';
import ProjectsEntries from '../containers/projectsEntries';
import Edit from '../containers/edit';
import EditProject from '../containers/editProject';
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
    action(params, queryParams) {
      const sortBy = queryParams.sortBy ? queryParams.sortBy : 'date';
      mount(MainLayoutCtx, {
        content: () => (<EngineeringEntries sortBy={sortBy}/>)
      });
    }
  });

  FlowRouter.route('/accounting', {
    name: 'accounting',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<AccountingEntries/>)
      });
    }
  });

  FlowRouter.route('/projectsentries', {
    name: 'projectsentries',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<ProjectsEntries/>)
      });
    }
  });

  FlowRouter.route('/editProject/:projectId', {
    name: 'editProject',
    action({projectId}) {
      mount(MainLayoutCtx, {
        content: () => (<EditProject projectId={projectId}/>)
      });
    }
  });

	FlowRouter.route('/copyProject/:projectId', {
    name: 'copyProject',
    action({projectId}) {
      mount(MainLayoutCtx, {
        content: () => (<EditProject projectId={projectId} copyFlag/>)
      });
    }
  });

  FlowRouter.route('/newproject', {
    name: 'newproject',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<EditProject/>)
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

  FlowRouter.route('/newentry', {
    name: 'newentry',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Edit/>)
      });
    }
  });

};
