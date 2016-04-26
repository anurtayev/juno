import React from 'react'

export default ({tasks}) =>
  <div>
    {
      tasks ?
      tasks.map(task =>
        <div key={task}>
          {task}
        </div>) :
      null
    }
  </div>
