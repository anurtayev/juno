ProjectRow = React.createClass({
  
  propTypes: {
    project: React.PropTypes.object.isRequired,
    onUpdate: React.PropTypes.func.isRequired,
    looseFocus: React.PropTypes.func.isRequired
  },
  
  handleClick( projectId ) {
    this.props.onUpdate( projectId );
    this.props.looseFocus();
  },
  
  render() {
    return (
      <div className="row projectRow" onClick={this.handleClick.bind(null, this.props.project._id)}>
        <div className="col-xs-2">{this.props.project.code}</div>
        <div className="col-xs-5">{this.props.project.title}</div>
        <div className="col-xs-5">{this.props.project.location}</div>
      </div>
    );
  }
});