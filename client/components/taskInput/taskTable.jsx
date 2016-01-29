export default TaskTable = ({tasks, onMouseInsideTable, onMouseOutsideTable, taskOnChange}) => (
  
  <div onMouseOver={onMouseInsideTable} onMouseOut={onMouseOutsideTable} className='container-fluid'>
  
    {tasks.map( task => (
      <div onClick={taskOnChange.bind(null, task)} key={task} className='selectRow'>{task}</div>
    ))}
    
  </div>
);

TaskTable.propTypes = {
  tasks: React.PropTypes.arrayOf( React.PropTypes.string ).isRequired,
  taskOnChange: React.PropTypes.func.isRequired,
  onMouseInsideTable: React.PropTypes.func.isRequired,
  onMouseOutsideTable: React.PropTypes.func.isRequired
};