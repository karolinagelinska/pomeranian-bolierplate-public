import React, { useState, useEffect } from 'react';
import './styles.css';
import { MoleGameBoard } from './MoleGameBoard';
import { MoleGameSettings } from './MoleGameSettings';

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
    let intervalId;

    if (!intervalId) {
      intervalId = setInterval(() => {
        setSeconds(seconds - 1);
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [gameTime]);

  useEffect(() => {
    let intervalId;

    if (!intervalId) {
      intervalId = setInterval(() => {
        MoleCall();
      }, moleSpeed);

      return () => clearInterval(intervalId);
    }
  }, [gameTime]);

  const StartTimer = () => {
    setSeconds(seconds - 1);
    setIsActive(!isActive);

    useEffect(() => {
      setSeconds(gameTime / 1000);
    }, [gameTime]);
    useEffect(() => {
      let interval;
      if (isActive) {
        interval = setInterval(() => {
          setSeconds(seconds - 1);
        }, 1000);
      }
      return () => clearInterval(interval);
    }, [seconds]);
  };

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

      setMoleArray((prevVal) => {
        const newArray = [...prevVal];

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
      />

      <MoleGameBoard
        moleArray={moleArray}
        hitTheMole={hitTheMole}
        scoreCount={scoreCount}
      />
    </div>
  );
};
