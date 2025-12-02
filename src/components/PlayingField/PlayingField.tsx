import type React from 'react';
import type { ICell } from '../../types';
import Cell from './Cell/Cell';
import './PlayingField.css';

interface IPlayingField {
  cells: ICell[];
  isClickedOnCell: (index: number) => void;
}

const PlayingField: React.FC<IPlayingField> = ({ cells, isClickedOnCell }) => {
  return (
    <div className="cells">
      {cells.map((cell, index) => (
        <Cell
          key={index}
          isClickedOnCell={() => isClickedOnCell(index)}
          isClicked={cell.clicked}
          hasItem={cell.hasItem}
        />
      ))}
      
    </div>
  );
};

export default PlayingField;
