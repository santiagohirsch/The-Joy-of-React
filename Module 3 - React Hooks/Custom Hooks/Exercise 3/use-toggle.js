import React from 'react';

function useToggle(initialValue) {
  const [showClock, setShowClock] = React.useState(initialValue);

  function toggleClock() {
    setShowClock((currentValue) => !currentValue)
  }

  return [showClock, toggleClock];
  
}

export default useToggle;