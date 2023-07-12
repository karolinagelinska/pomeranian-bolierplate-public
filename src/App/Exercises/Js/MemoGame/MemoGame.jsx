import './styles.css';
import React, { useState, useEffect } from 'react';
import { MemoGameBoard } from './MemoGameBoard';
import { MemoGameSettings } from './MemoGameSettings';

const Timer = ({ seconds }) => {
  const minutes = () => {
    let minutes = Math.floor(seconds / 60);
    if (minutes < 10) return (minutes = '0' + minutes);
    else return minutes;
  };
  const extraSeconds = () => {
    let extraSeconds = seconds % 60;
    if (extraSeconds < 10) return (extraSeconds = '0' + extraSeconds);
    else return extraSeconds;
  };
  return (
    <div>
      <h4>
        CZAS
        <div>
          {minutes(minutes)}:{extraSeconds(extraSeconds)}
        </div>
      </h4>
    </div>
  );
};
const MoveCounter = ({ moveCounter }) => {
  return (
    <div>
      <h4>
        LICZBA RUCHÓW <div>{moveCounter}</div>
      </h4>
    </div>
  );
};

export const MemoGame = () => {
  const [numberOfTiles, setNumberOfTiles] = useState(8);
  const [gameIsActive, setGameIsActive] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [tileArray, setTileArray] = useState(Array(numberOfTiles).fill('A'));
  const [moveCounter, setMoveCounter] = useState(0);

  useEffect(() => {
    setTileArray(Array(numberOfTiles).fill('A'));
  }, [numberOfTiles]);

  useEffect(() => {
    let intervalId;
    if (!intervalId && gameIsActive) {
      intervalId = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [gameIsActive, seconds]);

  const handleTileClick = () => {
    setMoveCounter((prevValue) => prevValue + 1);
  };

  const letterArray = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'R',
    'S',
    'T',
    'U',
    'W',
    'X',
    'Y',
    'Z',
  ];
  const getRandomLetters = () => {
    const properSizeLetterArray = [...letterArray].slice(0, numberOfTiles / 2);
    const shuffledLetterArray = [
      ...properSizeLetterArray,
      ...properSizeLetterArray,
    ].sort(() => 0.5 - Math.random());
    setTileArray(shuffledLetterArray);
  };
  const revealTile = () => {};
  return (
    <div>
      {!gameIsActive ? (
        <MemoGameSettings
          numberOfTiles={numberOfTiles}
          setNumberOfTiles={setNumberOfTiles}
          startGame={() => {
            setGameIsActive(!gameIsActive);
            setMoveCounter(0);
            setSeconds(0);
            getRandomLetters();
          }}
        />
      ) : null}
      {gameIsActive ? (
        <>
          <Timer seconds={seconds} />
          <MoveCounter moveCounter={moveCounter} />
          <MemoGameBoard
            tileArray={tileArray}
            handleTileClick={handleTileClick}
          />
        </>
      ) : null}
    </div>
  );
};
