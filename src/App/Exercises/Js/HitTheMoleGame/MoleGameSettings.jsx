import React from 'react';
import './styles.css';

export const MoleGameSettings = ({
  gameTime,
  setGameTime,
  moleAmount,
  setMoleAmount,
  startGame,
  scoreCount,
  endGameMessage,
}) => {
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

  return (
    <>
      <h4 className="gameDescription">
        {endGameMessage === false
          ? `Gra polegająca na podążaniu za krecikiem i trafieniu na kwadrat, w
        którym się pojawił.`
          : `Gratulacje! Twój wynik to ${scoreCount} punkty`}
      </h4>
      <div className="moleGameSettings">
        <div className="settingsContainer">
          <div>
            <h4 className="rowName">CZAS GRY</h4>
            {gameTimeOption.map(({ label, timeValue }) => (
              <button
                className={gameTime === timeValue ? 'activeButton' : ''}
                onClick={() => {
                  setGameTime(timeValue);
                }}
              >
                {label}
              </button>
            ))}
          </div>
          <div>
            <h4 className="rowName">LICZBA KRETÓW</h4>
            {moleAmountOption.map(({ label }) => (
              <button
                className={
                  moleAmount === Number(label[0]) ? 'activeButton' : ''
                }
                onClick={() => setMoleAmount(Number(label[0]))}
              >
                {label}
              </button>
            ))}
          </div>
          <div>
            <h4 className="rowName">PRZYCISKI STERUJĄCE</h4>
            <button onClick={() => startGame()}>START</button>
          </div>
        </div>
      </div>
    </>
  );
};
