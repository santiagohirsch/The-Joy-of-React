import React from 'react';

import useMousePosition from './use-mouse-position.js';

// TODO: Pull the mouse-position logic into
// the use-mouse-position.js file!

function App() {
  const mousePosition = useMousePosition()

  return (
    <div className="wrapper">
      <p>
        {mousePosition.x} / {mousePosition.y}
      </p>
    </div>
  );
}

export default App;