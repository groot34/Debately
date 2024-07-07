import React from 'react';
import ScoringBoard from './components/ScoringBoard';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Debating Society Scoring Board</h1>
      <ScoringBoard />
    </div>
  );
};

export default App;

