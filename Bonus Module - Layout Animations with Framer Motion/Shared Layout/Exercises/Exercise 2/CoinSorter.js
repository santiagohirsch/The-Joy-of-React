import React from 'react';
import range from 'lodash.range';
import {
  LayoutGroup,
  motion,
} from 'framer-motion';

import styles from './CoinSorter.module.css';

const NUM_OF_BOXES = 4;

function CoinSorter({ numOfCoins }) {
  const [selectedBox, setSelectedBox] =
    React.useState(0);

  const id = React.useId();

  return (
    <LayoutGroup>
      <div className={styles.wrapper}>
        {range(NUM_OF_BOXES).map((boxIndex) => (
          <button
            key={boxIndex}
            className={`${styles.box} ${
              selectedBox === boxIndex
                ? styles.selected
                : ''
            }`}
            onClick={() =>
              setSelectedBox(boxIndex)
            }
          >
            {selectedBox === boxIndex &&
              range(numOfCoins).map(
                (coinIndex) => {
                  const layoutId = `${id}-${coinIndex}`;
                  return (
                    <motion.div
                      layoutId={layoutId}
                      layout={true}
                      transition={{
                        type: 'spring',
                        stiffness:
                          10 * (numOfCoins + 1) -
                          coinIndex * 5,
                        dampness: 20,
                      }}
                      key={layoutId}
                      className={styles.coin}
                    />
                  );
                }
              )}
          </button>
        ))}
      </div>
    </LayoutGroup>
  );
}

export default CoinSorter;