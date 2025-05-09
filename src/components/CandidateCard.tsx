import React from 'react';
import { Candidate } from '../interfaces/Candidate';

interface Props {
  candidate: Candidate;
  onSave: () => void;
  onSkip: () => void;
}

const CandidateCard: React.FC<Props> = ({ candidate, onSave, onSkip }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: 20, marginBottom: 20 }}>
      <img src={candidate.avatar_url} alt="avatar" style={{ width: 100 }} />
      <h2>{candidate.name}</h2>
      <p>@{candidate.username}</p>
      <p>{candidate.location}</p>
      <p>{candidate.email}</p>
      <p>{candidate.bio}</p>
      <p>{candidate.company}</p>
      <button onClick={onSave}>+</button>
      <button onClick={onSkip}>-</button>
    </div>
  );
};

export default CandidateCard;
