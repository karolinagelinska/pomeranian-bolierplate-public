import React from 'react';
import Mole from '../../../Images/Mole.svg';
import './styles.css';

export const MoleGameBoard = ({
  moleArray,
  hitTheMole,
  scoreCount,
  seconds,
}) => {
  return (
    <div className="moleGame">
      <div className="moleGameSettings">
        CZAS DO KOŃCA<div className="scoreDisplay">{seconds} </div>
      </div>
      <div className="moleGameSettings">
        WYNIK <div className="scoreDisplay">{scoreCount}</div>{' '}
      </div>
      <div className="board">
        {moleArray.map((mole, index) => {
          return (
            <span className="square">
              {mole.isVisible ? (
                <img onClick={() => hitTheMole(index)} src={Mole} alt="mole" />
              ) : null}
            </span>
          );
        })}
      </div>
    </div>
  );
};
