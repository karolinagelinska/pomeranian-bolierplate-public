import React from 'react';
import Mole from '../../../Images/Mole.svg';
import './styles.css';

export const MoleGameBoard = ({ moleArray, hitTheMole }) => {
  return (
    <div className="moleGame">
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
