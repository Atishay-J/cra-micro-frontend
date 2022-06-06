import React, { Suspense } from 'react';
import './App.css';

// const { RemoteApp } = React.lazy(() => import('provider/RemoteApp'));

const { RemoteApp } = import('provider/RemoteApp');

console.log('Navbar', RemoteApp);

function App() {
  return (
    <div className="App">
      <h1>I am consumer</h1>
      <Suspense fallback={<div>Loading...</div>}>
        {console.log('Here ', RemoteApp)}
        <RemoteApp />
      </Suspense>
    </div>
  );
}

export default App;
