import React from 'react';
import './styles.css';

export const MemoGameBoard = ({
  tileArray,
  handleTileClick,
  tileIsVisible,
}) => {
  return (
    <div className="gameBoard">
      {tileArray.map((tile) => {
        return (
          <span className="square" onClick={() => handleTileClick()}>
            {tile}
          </span>
        );
      })}
    </div>
  );
};
