import React from 'react';
import './Button.css';

interface IButtonProps {
  type?: 'submit' | 'reset' | 'button';
  text: string;
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler;
}

const Button: React.FC<IButtonProps> = ({
  type = 'button',
  text,
  className,
  style,
  onClick,
}) => {
  return (
    <button type={type} className={className} onClick={onClick} style={style}>
      {text}
    </button>
  );
};

export default Button;
