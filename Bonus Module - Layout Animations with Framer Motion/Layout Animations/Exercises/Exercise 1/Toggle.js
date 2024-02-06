import React from 'react';
import { motion } from 'framer-motion';

import styles from './Toggle.module.css';

function Toggle({ value, onChange, ...delegated }) {
  return (
    <button
      type="button"
      style={{
        justifyContent: value ? 'flex-end' : 'flex-start'
      }}
      role="switch"
      aria-checked={value}
      className={styles.wrapper}
      onClick={() => onChange(!value)}
      {...delegated}
    >
      <motion.span
        className={styles.ball}
        initial={false}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 40,
        }}
        layout={true}
      />
    </button>
  );
}

export default Toggle;