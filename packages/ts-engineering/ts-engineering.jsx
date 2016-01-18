Engineering = React.createClass({
  
  propTypes: {
    lopa: React.PropTypes.string.isRequired
  },
  
  mixins: [ReactMeteorData],
  
  getMeteorData() {
    return {
      entries: Entries.find({ userId: Meteor.userId(), submited: false }, {sort: {createdAt: -1}}).fetch(),
      entriesReady: Meteor.subscribe('Entries.engineering').ready()
    };
  },
  
  render() {
    return <div id='Engineering' className='visbox'><div>ccccc{this.props.lopa}</div><div>{this.props.children}</div></div>;
  }
});