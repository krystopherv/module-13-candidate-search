import React, { useState } from 'react';
import { Candidate } from '../interfaces/Candidate';
import CandidateCard from '../components/CandidateCard';

const mockCandidates: Candidate[] = [
  {
    id: 1,
    name: "Jane Developer",
    username: "janedev",
    location: "San Francisco",
    avatar_url: "https://via.placeholder.com/100",
    email: "jane@example.com",
    bio: "Frontend engineer passionate about design.",
    company: "OpenAI"
  },
  {
    id: 2,
    name: "John Coder",
    username: "johncoder",
    location: "New York",
    avatar_url: "https://via.placeholder.com/100",
    email: "john@example.com",
    bio: "Full-stack developer who loves clean code.",
    company: "Code Inc."
  }
];

const CandidateSearch: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [saved, setSaved] = useState<Candidate[]>([]);

  const handleSave = () => {
    const newSaved = [...saved, mockCandidates[index]];
    setSaved(newSaved);
    localStorage.setItem("savedCandidates", JSON.stringify(newSaved));
    setIndex(index + 1);
  };

  const handleSkip = () => {
    setIndex(index + 1);
  };

  if (index >= mockCandidates.length) {
    return <p>No more candidates available.</p>;
  }

  return (
    <div>
      <h1>Candidate Search</h1>
      <CandidateCard candidate={mockCandidates[index]} onSave={handleSave} onSkip={handleSkip} />
    </div>
  );
};

export default CandidateSearch;
