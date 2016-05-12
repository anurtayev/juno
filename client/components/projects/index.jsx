import React from 'react'
import Table from './table.jsx'
import ToolBar from './tb.jsx'
import { StickyContainer, Sticky } from 'react-sticky'

export default ({projects, actions}) =>
  <StickyContainer>
		<Sticky>
	    <ToolBar onInvoicing={actions().projects.onInvoicing}/>
		</Sticky>

    {
      projects.length === 0 ? null :
      <Table
        projects={projects}
        onDelete={actions().projects.onDelete}
        onCopy={actions().projects.onCopy}
        onEdit={actions().projects.onEdit}
      />}

  </StickyContainer>
