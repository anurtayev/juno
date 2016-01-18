Accounting = React.createClass({
  render() {
    return (
      <div className='container-fluid visbox'>
        {this.props.children}
      </div>
    );
  }
});