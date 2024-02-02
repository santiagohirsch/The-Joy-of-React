import React from 'react';

import List from './List';

function App() {
  return (
    <main>
      <List>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </List>
      <List type="ol">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </List>
    </main>
  );
}

export default App;