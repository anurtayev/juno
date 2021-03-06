import Entries from '../components/accounting/index.jsx'
import {useDeps} from 'react-simple-di'
import {composeWithTracker, composeAll} from 'react-komposer'
import CircularProgress from 'material-ui/lib/circular-progress'

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();

  if (Meteor.subscribe('entries.accounting').ready()) {
    const entries = Collections.Entries.find({ submitted: true }, {sort: {username:1, createdAt: -1}}).fetch();

    onData(null, {entries});
  }
};

export default composeAll(
  composeWithTracker(composer, CircularProgress),
  useDeps()
)(Entries);
