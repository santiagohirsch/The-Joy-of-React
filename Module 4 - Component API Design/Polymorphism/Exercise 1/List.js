import React from 'react';

import styles from './List.module.css';

function List({
  // ol | ul
  type: Tag = 'ul',
  className = '',
  children,
  ...delegated
}) {
  return (
    <Tag
      {...delegated}
      className={`${styles.wrapper} ${className}`}
    >
      {children}
    </Tag>
  );
}

export default List;