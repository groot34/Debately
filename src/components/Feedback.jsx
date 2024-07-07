import React, { useState } from 'react';

const Feedback = ({ name }) => {
  const [feedback, setFeedback] = useState('');

  return (
    <div className="my-2">
      <label className="block text-sm font-medium">Feedback for {name}</label>
      <textarea
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        rows="3"
        className="w-full p-2 border rounded"
        placeholder="Enter at least 50 words of feedback"
      />
    </div>
  );
};

export default Feedback;
