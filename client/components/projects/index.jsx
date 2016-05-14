import React from 'react'
import Table from './table.jsx'
import ToolBar from './tb.jsx'

export default ({projects, onInvoicing, onNewProject, onCopy, onEdit, onDelete, error}) =>
  <div>
    <ToolBar
			onInvoicing={onInvoicing}
			onNewProject={onNewProject}
			/>

		{ error ? <p style={{color: 'red'}}>{error}</p> : null }

    {
      projects.length === 0 ? null :
      <Table
        projects={projects}
        onDelete={onDelete}
        onCopy={onCopy}
        onEdit={onEdit}
        />
    }

  </div>
