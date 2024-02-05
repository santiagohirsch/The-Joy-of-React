import React from 'react';

import Header from './Header';
import Ticker from './Ticker';
import Stories from './Stories';
import ErrorBoundary from './ErrorBoundary';

function App() {
  return (
    <>
      <Header />
      
      <ErrorBoundary>
        <Ticker />
      </ErrorBoundary>
      
      <main>
        <h1>Top Stories</h1>
        <Stories />
      </main>
    </>
  );
}

export default App;