import FlatButton from 'material-ui/lib/flat-button';
import AccountsUI from '../accounts-ui/index.jsx';

const EntriesActions = (props) => (
  <div>
    <AccountsUI/>
    <FlatButton label="New" onTouchTap={props.navigateNewEntry} style={props.style} />
    <FlatButton label="Submit" style={props.style} />
  </div>
);

EntriesActions.propTypes = { 
  navigateNewEntry: React.PropTypes.func.isRequired
};

EntriesActions.displayName = 'FlatButton';

export default EntriesActions;