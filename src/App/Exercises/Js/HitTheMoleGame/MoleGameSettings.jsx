import React from 'react';
import './styles.css';

export const MoleGameSettings = ({
  gameTime,
  setGameTime,
  moleAmount,
  setMoleAmount,
  setIsActive,
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
      <p className="gameDescription">
        Gra polegająca na podążaniu za krecikiem i trafieniu na kwadrat, w
        którym się pojawił.
      </p>
      <div className="moleGameSettings">
        <div className="settingsContainer">
          <div>
            <h4>CZAS GRY</h4>
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
            <h4>LICZBA KRETÓW</h4>
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
            <h4>PRZYCISKI STERUJĄCE</h4>
            <button>START</button>
          </div>
        </div>
      </div>
    </>
  );
};
