
export default ProjectRow = ({project, projectOnChange}) => (
  <div onClick={projectOnChange.bind(null, project)} className='row selectRow'>
    <div className='col-md-4'>{project.projectNumber}</div>
    <div className='col-md-8'>{project.projectName}</div>
  </div>
);

ProjectRow.propTypes = {
  project: React.PropTypes.object.isRequired,
  projectOnChange: React.PropTypes.func.isRequired
};