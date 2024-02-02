import React from 'react';

import useToggle from './use-toggle';
import Toggle from './Toggle';

function App() {
  const [enableWifi, toggleEnableWifi] = useToggle(true);
  const [lowPowerMode, toggleLowPowerMode] = useToggle(false);
  
  return (
    <main>
      <Toggle
        label="Enable Wi-Fi"
        checked={enableWifi}
        onClick={toggleEnableWifi}
      />
      <Toggle
        className="green-toggle"
        label="Low Power Mode"
        checked={lowPowerMode}
        onClick={toggleLowPowerMode}
      />
    </main>
  );
}

export default App;