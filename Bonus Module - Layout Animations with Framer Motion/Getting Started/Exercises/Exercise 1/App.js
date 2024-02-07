import React from 'react';

import Toggle from './Toggle';

function App() {
  const [isEnabled, setIsEnabled] = React.useState(false);
  
  return (
    <>
      <Toggle
        value={isEnabled}
        onChange={setIsEnabled}
      />
    </>
  );
}

export default App;