import React, { useState, useEffect } from 'react';
import './styles.css';
import { MoleGameBoard } from './MoleGameBoard';
import { MoleGameSettings } from './MoleGameSettings';
const CountdownTimer = ({ seconds }) => {
  return <h4> DO KOŃCA: {seconds} </h4>;
};
export const HitTheMoleGame = () => {
  const DEFAULT_GAME_TIME = 2 * 60 * 1000;
  const [gameTime, setGameTime] = useState(DEFAULT_GAME_TIME);
  const [moleAmount, setMoleAmount] = useState(1);
  const [scoreCount, setScoreCount] = useState(0);
  const [seconds, setSeconds] = useState(DEFAULT_GAME_TIME);
  const [isActive, setIsActive] = useState(false);
  const [moleArray, setMoleArray] = useState(
    Array(10).fill({ isVisible: false, isWhacked: false })
  );
  const moleSpeed = 1000;
  useEffect(() => {
    if (!seconds) return;
    let intervalId;
    if (!intervalId && isActive) {
      intervalId = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [isActive]);

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
  //Timer

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

  // if (scoreCount >= 20) return Gratulacje! Zdobyłeś x punktów
  // else if (seconds === 0) return Gratulacje! Zdobyłeś x punktów

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
      <MoleGameSettings
        gameTime={gameTime}
        setGameTime={setGameTime}
        moleAmount={moleAmount}
        setMoleAmount={setMoleAmount}
        startGame={() => setIsActive(true)}
        isActive={isActive}
      />

      {isActive ? (
        <>
          <CountdownTimer seconds={seconds} />
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
