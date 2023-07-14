import React from 'react';
import './styles.css';

export const MemoGameBoard = ({ tileArray, handleTileClick }) => {
  return (
    <div className="gameBoard">
      {tileArray.map((tile) => {
        return (
          <span className="square" onClick={() => handleTileClick()}>
            {tile.isVisible ? tile.value : null}
          </span>
        );
      })}
    </div>
  );
};
