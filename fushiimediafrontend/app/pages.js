'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [status, setStatus] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api')
      .then(res => res.json())
      .then(data => setStatus(data))
      .catch(err => setError(err.message));
  }, []);

  return (
    // <main className="p-4">
    //   <h1 className="text-2xl font-bold mb-4">API Status</h1>
    //   {status && (
    //     <pre className="bg-green-100 p-4 rounded">
    //       {JSON.stringify(status, null, 2)}
    //     </pre>
    //   )}
    //   {error && (
    //     <div className="bg-red-100 p-4 rounded text-red-700">
    //       Error: {error}
    //     </div>
    //   )}
    // </main>
    <main style={{ padding: '16px' }}>
  <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '16px' }}>API Status</h1>
  {status && (
    <pre style={{ backgroundColor: '#d1fae5', padding: '16px', borderRadius: '8px' }}>
      {JSON.stringify(status, null, 2)}
    </pre>
  )}
  {error && (
    <div style={{ backgroundColor: '#fee2e2', padding: '16px', borderRadius: '8px', color: '#b91c1c' }}>
      Error: {error}
    </div>
  )}
</main>
  );
}