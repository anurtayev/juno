import React from 'react'

export default TaskTable = ({tasks, onMouseInsideTable, onMouseOutsideTable, taskOnSelect}) => (

  <div onMouseOver={onMouseInsideTable} onMouseOut={onMouseOutsideTable} className='container-fluid'>

    {tasks.map( task => (
      <div onClick={taskOnSelect.bind(null, task)} key={task} className='selectRow'>{task}</div>
    ))}

  </div>
);

TaskTable.propTypes = {
  tasks: React.PropTypes.arrayOf( React.PropTypes.string ).isRequired,
  taskOnSelect: React.PropTypes.func.isRequired,
  onMouseInsideTable: React.PropTypes.func.isRequired,
  onMouseOutsideTable: React.PropTypes.func.isRequired
};
