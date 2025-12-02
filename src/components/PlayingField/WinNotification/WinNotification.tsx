import type React from 'react';
import './WinNotification.css';

interface IWinNotificationProps {
  isWin: boolean;
  text: string;
}

const WinNotification: React.FC<IWinNotificationProps> = ({ isWin, text }) => {
  return <div className={`notify ${isWin && 'active'}`}>{text}</div>;
};

export default WinNotification;
