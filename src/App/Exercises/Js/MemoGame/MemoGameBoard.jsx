import React from 'react';
import './styles.css';

export const MemoGameBoard = ({ tileArray, handleTileClick }) => {
  return (
    <div className="gameBoard">
      {tileArray.map((letterObject) => {
        return (
          <span className="square" onClick={() => handleTileClick()}>
            {(letterObject.isGuessed || letterObject.isVisible) &&
              letterObject.value}
          </span>
        );
      })}
    </div>
  );
};
