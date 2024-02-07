import React from 'react';
import { motion } from 'framer-motion';

import styles from './Toasty.module.css';

function Toasty() {
  const [isShown, setIsShown] = React.useState(false);

  const wrapperRef = React.useRef();

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;

      setIsShown(entry.isIntersecting);
    });

    observer.observe(wrapperRef.current);
  }, []);

  const translateX = isShown ? '0%' : '100%';
  const stiffness = isShown ? 300 : 600;
  const dampness = isShown ? 80 : 40;

  return (
    <div ref={wrapperRef} className={styles.wrapper}>
      <motion.div
        className={styles.character}
        transition={{
          type: 'spring',
          stiffness: stiffness,
          dampness: dampness,
        }}
        animate={{
          x: translateX,
        }}
      >
        👻
      </motion.div>
    </div>
  );
}

export default Toasty;