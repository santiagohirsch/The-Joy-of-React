import React from 'react';

import Slider from './Slider';
import styles from './SquareSlider.module.css';

function SquareSlider(props, ref) {
  return (
    <Slider
      ref={ref}
      {...props}
      className={styles.squareSlider}
    />
  );
}

export default React.forwardRef(SquareSlider);