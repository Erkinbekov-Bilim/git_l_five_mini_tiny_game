import React, { useState } from 'react';
import './MiniGameApp.css';
import PlayingField from '../../components/PlayingField/PlayingField';
import type { ICell } from '../../types';
import getRandomInt from '../../utils/getRandomInt';
import ResetPlayingField from '../../components/PlayingField/ResetPlayingField/ResetPlayingField';
import TrieFinderWinCell from '../../components/PlayingField/TrieFinderWinCell/TrieFinderWinCell';
import WinNotification from '../../components/PlayingField/WinNotification/WinNotification';

const MiniGameApp = () => {
  const generateCells = (): ICell[] => {
    const arrayOfCells: ICell[] = [];
    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 6; j++) {
        arrayOfCells.push({
          hasItem: false,
          clicked: false,
        });
      }
    }

    const index: number = getRandomInt(0, arrayOfCells.length - 1);
    arrayOfCells[index].hasItem = true;

    return arrayOfCells;
  };

  const [cells, setCells] = useState<ICell[]>(generateCells());
  const [tries, setTries] = useState<number>(0);
  const [win, setWin] = useState<boolean>(false);

  const resetTheField = (): void => {
    setWin(false);
    setTries(0);
    setCells(generateCells());
  };

  const isClickedOnCell = (index: number): ICell[] | void => {
    if (win) {
      return alert('Reset the field!');
    }

    setCells(
      cells.map((cell, indexCell) => {
        if (indexCell === index) {
          return { ...cell, clicked: true };
        }

        return cell;
      })
    );

    if (!cells[index].hasItem && !cells[index].clicked) {
      setTries(tries + 1);
    } else {
      setWin(true);
    }
  };

  let notify: React.ReactNode = null;
  if (win) {
    notify = <WinNotification isWin={win} text={'Win'} />;
  }

  return (
    <>
      <div className="mini-game">
        {notify}
        <PlayingField cells={cells} isClickedOnCell={isClickedOnCell} />
        <TrieFinderWinCell tries={tries} />
        <ResetPlayingField resetTheField={resetTheField} />
      </div>
    </>
  );
};

export default MiniGameApp;
