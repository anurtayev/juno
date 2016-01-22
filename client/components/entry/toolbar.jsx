export default (props) => (
  <div id="actionBar" className="container-fluid visbox">
    <button type="button" className="btn btn-success" onClick={props.handleSubmit} >Submit entries</button>
  </div>
);