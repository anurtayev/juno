import ProjectRow from './projectRow.jsx';

const ProjectsTable = ({projects, onMouseInsideTable, onMouseOutsideTable, selectedProjectOnChange}) => (
  
  <div onMouseOver={onMouseInsideTable} onMouseOut={onMouseOutsideTable}>
  
    {projects.map( project => (
      <ProjectRow project={project} key={project._id} selectedProjectOnChange={selectedProjectOnChange}/>
    ))}
    
  </div>
);

ProjectsTable.propTypes = {
  projects: React.PropTypes.arrayOf( React.PropTypes.object ).isRequired,
  selectedProjectOnChange: React.PropTypes.func.isRequired,
  onMouseInsideTable: React.PropTypes.func.isRequired,
  onMouseOutsideTable: React.PropTypes.func.isRequired
};

export default ProjectsTable;