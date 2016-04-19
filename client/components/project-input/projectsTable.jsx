import ProjectRow from './row.jsx';
import React from 'react'

export default ProjectsTable = ({projects, onMouseInsideTable, onMouseOutsideTable, projectOnChange}) => (

  <div onMouseOver={onMouseInsideTable} onMouseOut={onMouseOutsideTable} className='container-fluid'>

    {projects.map( project => (
      <ProjectRow project={project} key={project._id} projectOnChange={projectOnChange}/>
    ))}

  </div>
);

ProjectsTable.propTypes = {
  projects: React.PropTypes.arrayOf( React.PropTypes.object ).isRequired,
  projectOnChange: React.PropTypes.func.isRequired,
  onMouseInsideTable: React.PropTypes.func.isRequired,
  onMouseOutsideTable: React.PropTypes.func.isRequired
};
