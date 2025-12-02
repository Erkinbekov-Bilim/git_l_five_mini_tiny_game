import React from 'react';
import './Cell.css';

interface ICellProps {
  isClickedOnCell: () => void;
  isClicked: boolean;
  hasItem: boolean;
}

const Cell: React.FC<ICellProps> = ({
  isClickedOnCell,
  isClicked,
  hasItem,
}) => {
  let styleClass: string | null = null;

  if (isClicked && hasItem) {
    styleClass = '-win';
  }

  if (isClicked && !hasItem) {
    styleClass = '-none';
  }

  return (
    <>
      <div
        className={`cell${isClicked ? styleClass : ''}`}
        onClick={isClickedOnCell}
      ></div>
    </>
  );
};

export default Cell;
