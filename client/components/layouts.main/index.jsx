import AccountsUI from '../accounts-ui/index.jsx';

export default ({content = () => null }) => (
  <div>
    <header>
      <AccountsUI/>
    </header>
    <div>
      {content()}
    </div>
  </div>
);