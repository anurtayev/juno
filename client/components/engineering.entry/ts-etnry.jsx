Entry = React.createClass({
  
  
  
  propTypes: {
    projects: React.PropTypes.arrayOf( React.PropTypes.object ),
    projectsReady: React.PropTypes.bool,
    entries: React.PropTypes.arrayOf( React.PropTypes.object ),
    entriesReady: React.PropTypes.bool
  },
  
  render() {
    return (
      <div className='container-fluid visbox'>
        <table className='table'>
          <thead>
            <tr className='info'>
              <th>Date</th>
              <th>Project</th>
              <th>Task</th>
              <th>Hours</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
          
            <tr>
              <form>
                <td>
                  <input type='text'/>
                </td>
                <td>
                  <input type='text'/>
                </td>
                <td>
                  <input type='text'/>
                </td>
                <td>
                  <input type="text" ref="hours" id="hoursInput" placeholder="Number of hours" className="form-control" autoComplete="off" />
                </td>
                <td>
                  <input type="text" ref="description" id="descriptionInput" placeholder="Type to add description" className="form-control" />
                </td>
              </form>
            </tr>

            <tr>
              <td>Lowes</td>
              <td>Survey</td>
              <td>12/1/2015</td>
              <td>4</td>
              <td>assara dara chukara</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
});