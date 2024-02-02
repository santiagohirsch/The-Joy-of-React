import React from 'react';

import styles from './LinkButton.module.css';

function LinkButton({
  href,
  children,
  ...delegated
}) {
  const Tag =
    typeof href === 'string' ? 'a' : 'button';

  return (
    <Tag
      href={href}
      className={styles.button}
      {...delegated}
    >
      {children}
    </Tag>
  );
}

export default LinkButton;