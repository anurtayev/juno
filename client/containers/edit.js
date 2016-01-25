import Edit from '../components/edit/index.jsx';
import {useDeps} from 'react-simple-di';
import {composeWithTracker, composeAll} from 'react-komposer';

export const composer = (props, onData) => {
  const {LocalState} = props.context;
  const error = LocalState.get('SAVING_ERROR');
  onData(null, {error});
  
  // clearErrors when unmounting the component
  return props.actions.entries.clearErrors;
};

export default composeAll(
  composeWithTracker(composer),
  useDeps()
)(Edit);