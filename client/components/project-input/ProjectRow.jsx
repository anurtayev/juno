const ProjectRow = ({project, selectedProjectOnChange}) => (
  <div onClick={selectedProjectOnChange.bind(null, project)}>
    <div>{project.code}</div>
    <div>{project.title}</div>
    <div>{project.location}</div>
  </div>
);

ProjectRow.propTypes = {
  project: React.PropTypes.object.isRequired,
  selectedProjectOnChange: React.PropTypes.func.isRequired
};

export default ProjectRow;