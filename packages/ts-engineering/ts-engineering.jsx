Engineering = React.createClass({
  mixins: [ReactMeteorData],
  
  getMeteorData() {
    return {
      entries: Entries.find({ userId: Meteor.userId(), submited: false }, {sort: {createdAt: -1}}).fetch(),
      entriesReady: Meteor.subscribe('Entries.engineering').ready()
    };
  },
  
  render() {
    return <div id='Engineering' className='visbox'><div>ccccc{this.props.str1}</div><div>{this.props.children}</div></div>;
  }
});