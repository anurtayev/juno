ActionBar = React.createClass({
  
  handleSubmit() {
    Meteor.call('submit');
  },
  
  render() {
    return (
      <div id="actionBar" className="container-fluid visbox">
        <button type="button" className="btn btn-success" onClick={this.handleSubmit} >Submit entries</button>
      </div>
    );
  }
});