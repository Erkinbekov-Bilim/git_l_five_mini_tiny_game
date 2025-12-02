import React from 'react';
import Button from '../../../UI/Button/Button';
import './ResetPlayingFieldBtn.css';

interface IResetPlayingFieldProps {
  resetTheField: React.MouseEventHandler;
}

const ResetPlayingField: React.FC<IResetPlayingFieldProps> = ({
  resetTheField,
}) => {
  return (
    <div>
      <Button
        type="button"
        className="reset-playingField"
        onClick={resetTheField}
        text="Reset"
      />
    </div>
  );
};

export default ResetPlayingField;
