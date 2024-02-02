import React from 'react';

import styles from './Slider.module.css';

function Slider(
  { label, className = '', ...delegated },
  ref
) {
  const id = React.useId();

  return (
    <div className={styles.wrapper}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <input
        ref={ref}
        {...delegated}
        type="range"
        id={id}
        className={`${styles.slider} ${className}`}
      />
    </div>
  );
}

export default React.forwardRef(Slider);