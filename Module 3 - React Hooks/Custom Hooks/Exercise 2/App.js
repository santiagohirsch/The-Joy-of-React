import React from 'react';

import useIsOnscreen from './use-is-onscreen.js';

function App() {
  const boxRef = React.useRef()
  const isOnscreen = useIsOnscreen(boxRef);

  return (
    <>
      <header>
        Red box visible: {isOnscreen ? 'YES' : 'NO'}
      </header>
      <div className="wrapper">
        <div className="red box" ref={boxRef} />
      </div>
    </>
  );
}

export default App;