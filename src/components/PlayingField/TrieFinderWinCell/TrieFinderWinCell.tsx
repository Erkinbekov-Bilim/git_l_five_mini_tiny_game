import React from 'react';
import './TrieFinderWinCell.css';

interface ITrieFinderWinCellProps {
  tries: number;
}

const TrieFinderWinCell: React.FC<ITrieFinderWinCellProps> = ({ tries }) => {
  return (
    <div className="tries">
      <p>{tries}</p>
    </div>
  );
};

export default TrieFinderWinCell;
