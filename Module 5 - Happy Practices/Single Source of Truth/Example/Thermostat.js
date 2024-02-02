import React from 'react';
import {
  ChevronUp,
  ChevronDown,
} from 'react-feather';

import VisuallyHidden from './VisuallyHidden';
import styles from './Thermostat.module.css';

function Thermostat({ value, onChange }) {
  function incrementTemperature() {
    const nextTemperature = value + 1;

    onChange(nextTemperature);
  }
  function decrementTemperature() {
    const nextTemperature = value - 1;

    onChange(nextTemperature);
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>Sugarfine</div>
      <div className={styles.digitalScreen}>
        {value}°
      </div>
      <div className={styles.controls}>
        <div className={styles.tempAdjustButtons}>
          <button
            className={styles.iconButton}
            onClick={decrementTemperature}
          >
            <ChevronDown size={32} />
            <VisuallyHidden>
              Decrease temperature
            </VisuallyHidden>
          </button>
          <button
            className={styles.iconButton}
            onClick={incrementTemperature}
          >
            <ChevronUp size={32} />
            <VisuallyHidden>
              Increase temperature
            </VisuallyHidden>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Thermostat;