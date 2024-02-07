import React from 'react';
import { motion } from 'framer-motion';

function App() {
  const [isEnabled, setIsEnabled] = React.useState(true);
  
  return (
    <>
      <motion.div
        initial={false}
        className="yellow ball"
        transition={{
          type: 'spring',
          stiffness: 200,
          damping: 25,
        }}
        animate={{
          y: isEnabled ? 60 : 0,
        }}
      />
      <button onClick={() => setIsEnabled(!isEnabled)}>
        Toggle
      </button>
    </>
  );
}

export default App;