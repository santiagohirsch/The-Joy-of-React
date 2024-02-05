import React from 'react';

import Link from 'next/Link'

function ScreenSaverIndex({ params }) {
  return (
    <main>
      <p>Choose your color:</p>
      <ul>
        <li><Link href="/exercises/01-screensaver/cyan">cyan</Link></li>
        <li><Link href="/exercises/01-screensaver/hotpink">hotpink</Link></li>
        <li><Link href="/exercises/01-screensaver/red">red</Link></li>
        <li><Link href="/exercises/01-screensaver/white">white</Link></li>
      </ul>
    </main>
  );
}

export default ScreenSaverIndex;
