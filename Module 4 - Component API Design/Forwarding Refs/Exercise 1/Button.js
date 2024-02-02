import React from 'react';

import styles from './Button.module.css';

function Button({ children, ...delegated }, ref) {
  return (
    <button ref={ref} {...delegated} className={styles.btn}>
      {children}
    </button>
  );
}

export default React.forwardRef(Button);