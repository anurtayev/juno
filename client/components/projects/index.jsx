import React from 'react';
import Table from './table.jsx';
import ToolBar from './tb.jsx';

export default Projects = ({projects, actions}) => (
  <div>

    <ToolBar
      onInvoicing={actions().projects.onInvoicing}
    />

    {
      projects.length === 0 ? null :
      <Table
        projects={projects}
        onDelete={actions().projects.onDelete}
        onCopy={actions().projects.onCopy}
        onEdit={actions().projects.onEdit}
      />}

  </div>
);

Projects.propTypes = {
  projects: React.PropTypes.arrayOf( React.PropTypes.object ).isRequired
};