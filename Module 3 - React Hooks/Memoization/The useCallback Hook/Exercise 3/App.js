import React from 'react';

import useToggle from './hooks/use-toggle';
import Clock from './Clock';
import ClockToggle from './ClockToggle';

function App() {
  const [time, setTime] = React.useState(new Date());
  
  const [showClock, toggleClock] = useToggle(true);
  
  React.useEffect(() => {
    const intervalId = window.setInterval(() => {
      setTime(new Date());
    }, 1000);
    
    return () => {
      window.clearInterval(intervalId);
    };
  }, []);
  
  return (
    <>
      {showClock && <Clock time={time} />}
      <ClockToggle handleToggle={toggleClock} />
    </>
  );
}

export default App;