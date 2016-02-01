
export default ProjectRow = ({project, projectOnChange}) => (
  <div onClick={projectOnChange.bind(null, project)} className='row selectRow'>
    <div className='col-md-2'>{project.code}</div>
    <div className='col-md-5'>{project.title}</div>
    <div className='col-md-5'>{project.location}</div>
  </div>
);

ProjectRow.propTypes = {
  project: React.PropTypes.object.isRequired,
  projectOnChange: React.PropTypes.func.isRequired
};