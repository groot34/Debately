import React from 'react';
import Team from './Team';

const ScoringBoard = () => {
  const participantsTeam1 = ['Alice Johnson', 'Bob Smith', 'Charlie Davis'];
  const participantsTeam2 = ['David Wilson', 'Eva Brown', 'Frank Clark'];

  return (
    <div className="p-6">
      <Team teamName="Team 1" participants={participantsTeam1} />
      <Team teamName="Team 2" participants={participantsTeam2} />
    </div>
  );
};

export default ScoringBoard;
