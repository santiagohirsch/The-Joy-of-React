import React from 'react';

import Thermostat from './Thermostat';
import styles from './App.module.css';

const DEFAULT_TEMP = 25;

function App() {
  const [value, setValue] =
    React.useState(DEFAULT_TEMP);

  return (
    <>
      <Thermostat
        value={value}
        onChange={(nextValue) => {
          setValue(nextValue);
        }}
      />
      <button
        className={styles.resetBtn}
        onClick={() => setValue(DEFAULT_TEMP)}
      >
        Reset Temperature
      </button>
    </>
  );
}

export default App;