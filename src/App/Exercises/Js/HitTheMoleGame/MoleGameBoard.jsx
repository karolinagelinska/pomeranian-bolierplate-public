import React from 'react';
import Mole from '../../../Images/Mole.svg';

export const MoleGameBoard = ({ moleArray, hitTheMole, scoreCount }) => {
  return (
    <div>
      Obecny wynik to:{scoreCount} punktów
      {moleArray.map((mole, index) => {
        return (
          <span>
            {mole.isVisible ? (
              <img onClick={() => hitTheMole(index)} src={Mole} />
            ) : null}
          </span>
        );
      })}
    </div>
  );
};
