import React from 'react';

import useToggle from './use-toggle'
import Clock from './Clock'

function App() {
  // TODO: Replace this with “useToggle”!
  const [
    showClock,
    toggleClock
  ] = useToggle(true);
  
  return (
    <>
      <button
        className="clock-toggle"
        onClick={toggleClock}
      >
        {showClock ? 'Clock ON' : 'Clock OFF'}
      </button>
      
      {showClock && <Clock />}
    </>
  );
}

export default App;