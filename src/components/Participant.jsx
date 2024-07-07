import React, { useState } from 'react';
import StarRating from './StarRating';
import Feedback from './Feedback';

const Participant = ({ name }) => {
  const [debateScore, setDebateScore] = useState(0);
  const [platformScore, setPlatformScore] = useState(0);

  return (
    <div className="border p-4 mb-4">
      <h3 className="text-lg font-semibold">{name}</h3>
      <StarRating label="Debate Score" rating={debateScore} setRating={setDebateScore} />
      <StarRating label="Platform Score" rating={platformScore} setRating={setPlatformScore} />
      <Feedback name={name} />
    </div>
  );
};

export default Participant;
