export default ({content = () => null }) => (
  <div>
    <header>
    </header>
    <div>
      {content()}
    </div>
  </div>
);