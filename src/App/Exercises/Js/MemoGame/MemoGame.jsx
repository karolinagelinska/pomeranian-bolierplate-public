import './styles.css';
import React, { useState, useEffect } from 'react';
import { MemoGameBoard } from './MemoGameBoard';
import { MemoGameSettings } from './MemoGameSettings';

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
  const [tileArray, setTileArray] = useState(
    Array(numberOfTiles).fill({ isVisible: true, isGuessed: false, value: '' })
  );
  const [moveCounter, setMoveCounter] = useState(0);
  const [firstCheckedTile, setFirstCheckedTile] = useState(null);
  const [secondCheckedTile, setSecondCheckedTile] = useState(null);

  useEffect(() => {
    if (!gameIsActive) {
      const properSizeLetterArray = [...letterArray].slice(
        0,
        numberOfTiles / 2
      );
      const shuffledLetterArray = [
        ...properSizeLetterArray,
        ...properSizeLetterArray,
      ];
      shuffledLetterArray.sort(() => 0.5 - Math.random());
      setTileArray(
        shuffledLetterArray.map((letter, index) => {
          const letterObject = {
            isVisible: false,
            isGuessed: false,
            value: letter,
            id: index,
          };
          return letterObject;
        })
      );
    }
  }, [numberOfTiles, gameIsActive]);

  useEffect(() => {
    let intervalId;
    if (!intervalId && gameIsActive) {
      intervalId = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [gameIsActive, seconds]);

  useEffect(() => {
    const first = tileArray.find(
      (letterObject) => letterObject.id === firstCheckedTile
    );
    const second = tileArray.find(
      (letterObject) => letterObject.id === secondCheckedTile
    );
    let timeout;

    setTileArray((prevTileArray) =>
      prevTileArray.map((letterObject) => {
        const letterObjectCopy = { ...letterObject };
        if (
          letterObjectCopy.id === first?.id ||
          letterObjectCopy.id === second?.id
        ) {
          letterObjectCopy.isVisible = true;
          letterObjectCopy.isGuessed =
            letterObjectCopy.isGuessed || first?.value === second?.value;
        } else {
          letterObjectCopy.isVisible = false;
        }
        return letterObjectCopy;
      })
    );
    if (
      typeof firstCheckedTile === 'number' &&
      typeof secondCheckedTile === 'number'
    ) {
      timeout = setTimeout(() => {
        setTileArray((prev) =>
          prev.map((letterObject) => {
            const copy = { ...letterObject };
            copy.isVisible = false;
            return copy;
          })
        );
      }, 2000);
    }
    return () => clearTimeout(timeout);
  }, [tileArray, firstCheckedTile, secondCheckedTile]);

  const handleTileClick = (letterObject) => {
    if (letterObject.id === firstCheckedTile || letterObject.isGuessed) return;
    if (typeof firstCheckedTile !== 'number') {
      setFirstCheckedTile(letterObject.id);
      return;
    }
    if (typeof secondCheckedTile !== 'number') {
      setMoveCounter(moveCounter + 1);
      setSecondCheckedTile(letterObject.id);
      return;
    }
    setSecondCheckedTile(null);
    setFirstCheckedTile(letterObject.id);
  };

  return (
    <div>
      <MemoGameSettings
        numberOfTiles={numberOfTiles}
        setNumberOfTiles={setNumberOfTiles}
        setGameisActive={setGameIsActive}
        gameIsActive={gameIsActive}
        startGame={() => {
          setGameIsActive((active) => !active);
          setMoveCounter(0);
          setSeconds(0);
        }}
      />
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
