import React, { useState, useEffect } from 'react';
import './styles.css';
import { MoleGameBoard } from './MoleGameBoard';
import { MoleGameSettings } from './MoleGameSettings';
const CountdownTimer = ({ seconds }) => {
  return (
    <div>
      <h4>
        DO KOŃCA <div className="scoreDisplay">{seconds}</div>
      </h4>
    </div>
  );
};
const ScoreCounter = ({ scoreCount }) => {
  return (
    <div>
      <h4>
        WYNIK <div className="scoreDisplay">{scoreCount}</div>
      </h4>
    </div>
  );
};

export const HitTheMoleGame = () => {
  const DEFAULT_GAME_TIME = 2 * 1000;
  const [gameTime, setGameTime] = useState(DEFAULT_GAME_TIME);
  const [moleAmount, setMoleAmount] = useState(1);
  const [scoreCount, setScoreCount] = useState(0);
  const [seconds, setSeconds] = useState(DEFAULT_GAME_TIME);
  const [isActive, setIsActive] = useState(false);
  const [moleArray, setMoleArray] = useState(
    Array(10).fill({ isVisible: false, isWhacked: false })
  );
  const [endGameMessage, setEndGameMessage] = useState(false);
  const moleSpeed = 1000;
  useEffect(() => {
    if (!isActive && seconds === 0) setEndGameMessage(true);
  }, [isActive, seconds]);
  useEffect(() => {
    let intervalId;
    if (!intervalId && isActive) {
      intervalId = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    }
    if (seconds === 0) {
      setIsActive(false);
    }
    return () => clearInterval(intervalId);
  }, [isActive, seconds]);

  useEffect(() => {
    if (!isActive) setSeconds(gameTime / 1000);
  }, [isActive, gameTime]);

  useEffect(() => {
    let intervalId;

    if (!intervalId) {
      intervalId = setInterval(() => {
        MoleCall();
      }, moleSpeed);

      return () => clearInterval(intervalId);
    }
  }, [gameTime]);

  const MoleCall = () => {
    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
    const randomIndex = getRandomInt(0, moleArray.length - 1);

    setMoleArray((prevMoleArray) =>
      prevMoleArray.map((mole, index) => {
        const newMole = { ...mole };
        newMole.isVisible = index === randomIndex;

        return newMole;
      })
    );
  };

  const hitTheMole = (index) => {
    if (moleArray[index].isVisible) {
      setScoreCount(scoreCount + 1);

      setMoleArray((prevValue) => {
        const newArray = [...prevValue];

        newArray[index].isVisible = false;

        return newArray;
      });
    }
  };

  return (
    <div>
      {!isActive ? (
        <MoleGameSettings
          gameTime={gameTime}
          setGameTime={setGameTime}
          moleAmount={moleAmount}
          setMoleAmount={setMoleAmount}
          startGame={() => {
            setIsActive(!isActive);
            setScoreCount(0);
          }}
          isActive={isActive}
          endGameMessage={endGameMessage}
          scoreCount={scoreCount}
        />
      ) : null}

      {isActive ? (
        <>
          <CountdownTimer seconds={seconds} />
          <ScoreCounter scoreCount={scoreCount} />
          <MoleGameBoard
            moleArray={moleArray}
            hitTheMole={hitTheMole}
            scoreCount={scoreCount}
          />
        </>
      ) : null}
    </div>
  );
};
