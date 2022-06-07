import React, { Suspense } from 'react';
import './App.css';

const RemoteApp = React.lazy(() => import('provider/RemoteApp'));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <RemoteApp />
      </Suspense>
      <h1>I am consumer</h1>
    </div>
  );
}

export default App;
