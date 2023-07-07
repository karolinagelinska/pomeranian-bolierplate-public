import React, { useState, useEffect } from 'react';
import './styles.css';
import { MoleGameBoard } from './MoleGameBoard';
import { MoleGameSettings } from './MoleGameSettings';

export const HitTheMoleGame = () => {
  const defaultGameTime = 2 * 60 * 1000;
  const [gameTime, setGameTime] = useState(defaultGameTime);
  const [moleAmount, setMoleAmount] = useState(1);
  const [scoreCount, setScoreCount] = useState(0);
  const [seconds, setSeconds] = useState(defaultGameTime);
  const [isActive, setIsActive] = useState(false);

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
  const [moleArray, setMoleArray] = useState(
    Array(10).fill({ isVisible: false, isWhacked: false })
  );
  const MoleCall = () => {
    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
    const randomIndex = getRandomInt(0, moleArray.length - 1);
    console.log(randomIndex);

    setMoleArray((prevMoleArray) =>
      prevMoleArray.map((mole, index) => {
        const newMole = { ...mole };
        newMole.isVisible = index === randomIndex;

        return newMole;
      })
    );
    console.log(moleArray);
  };

  const hitTheMole = (index) => {
    if (!moleArray[index].isVisible) return;
    moleArray[index].isWhacked = !moleArray[index].isWhacked;
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
      <button onClick={() => MoleCall()}>Click me</button>
    </div>
  );
};
