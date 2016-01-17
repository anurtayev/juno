TaskInput = React.createClass({
  
  propTypes: {
    tasks: React.PropTypes.arrayOf( React.PropTypes.object ).isRequired,
    value: React.PropTypes.object.isRequired,
    onUpdate: React.PropTypes.func.isRequired
  },
  
  handleChange(e){
    this.props.onUpdate( e.target.value );
  },
  
  _tasksMarkup(e){
    return this.props.tasks.map( (task) => {
      return (
        <option value={task._id} key={task._id}>{task.text}</option>
      );
    });
  },
  
  render() {
    return (
      <div className="form-group">
        <label htmlFor="taskInput">Task</label>
        <select ref="task" id="taskInput" className="form-control"  value={this.props.value._id} onChange={this.handleChange}>
          {this._tasksMarkup()} 
        </select>
      </div>
    );
  }
});
