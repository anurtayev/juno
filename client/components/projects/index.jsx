import React from 'react';
import Table from './table.jsx';
import ToolBar from './tb.jsx';

export default Projects = ({projects, actions}) => (
  <div>

    <ToolBar
      onInvoicing={actions().invoicing.onInvoicing}
    />

    {projects.length === 0 ? null : <Table projects={projects}/>}

  </div>
);

Projects.propTypes = {
  projects: React.PropTypes.arrayOf( React.PropTypes.object ).isRequired
};
