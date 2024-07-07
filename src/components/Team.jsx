import React from 'react';
import Participant from './Participant';

const Team = ({ teamName, participants }) => {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-bold mb-4">{teamName}</h2>
      <div>
        {participants.map((name, index) => (
          <Participant key={index} name={name} />
        ))}
      </div>
    </div>
  );
};

export default Team;
