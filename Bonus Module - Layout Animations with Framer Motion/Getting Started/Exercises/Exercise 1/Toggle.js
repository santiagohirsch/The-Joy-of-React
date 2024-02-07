import React from 'react';
import { motion } from 'framer-motion';

import styles from './Toggle.module.css';

function Toggle({ value, onChange, ...delegated }) {
  return (
    <button
      type="button"
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
          stiffness: 200,
          dampness: 20,
        }}
        animate={{
          x: value ? '100%' : '0%',
        }}
      />
    </button>
  );
}

export default Toggle;