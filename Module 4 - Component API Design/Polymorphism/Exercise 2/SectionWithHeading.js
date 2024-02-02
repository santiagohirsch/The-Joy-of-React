import React from 'react';

function SectionWithHeading({
  title,
  children,
  level = 1,
}) {
  const Tag = `h${level}`;
  return (
    <section>
      <Tag>{title}</Tag>
      {children}
    </section>
  );
}

export default SectionWithHeading;