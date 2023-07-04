import React from 'react';
import { useState } from 'react';
import Mole from '../../../Images/Mole.svg';

export const HitTheMoleGame = () => {
  const gameTimeOption = [
    { label: '1 minuta', timeValue: 1 * 60 * 1000 },
    { label: '2 minuty', timeValue: 2 * 60 * 1000 },
    { label: '3 minuty', timeValue: 3 * 60 * 1000 },
  ];
  const moleAmountOption = [
    { label: '1 kret' },
    { label: '2 krety' },
    { label: '3 krety' },
  ];
  const boardSize = 8;
  const [moleArray, setMoleArray] = useState(
    Array(10).fill({ isVisible: false, isWhacked: false })
  );

  const defaultGameTime = 2 * 60 * 1000;
  const [gameTime, setGameTime] = useState(defaultGameTime);
  const [moleAmount, setMoleAmount] = useState(1);

  const hitTheMole = (index) => {
    if (!moleArray[index].isVisible) return;
    moleArray[index].isWhacked = !moleArray[index].isWhacked;
  };

  return (
    <>
      <p>Liczba kretów: {moleAmount}</p>
      {moleAmountOption.map(({ label }) => (
        <button onClick={() => setMoleAmount(Number(label[0]))}>{label}</button>
      ))}

      <p>
        Czas gry: {gameTime / 60 / 1000}{' '}
        {gameTime > 1000 * 60 ? 'minuty' : 'minuta'}
      </p>
      {gameTimeOption.map(({ label, timeValue }) => (
        <button onClick={() => setGameTime(timeValue)}>{label}</button>
      ))}

      {moleArray.map((mole, index) => {
        return (
          <span>
            {mole.isVisible ? (
              <img onClick={() => hitTheMole(index)} src={Mole} />
            ) : null}
          </span>
        );
      })}
    </>
  );
};
