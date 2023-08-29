import { useState } from 'react';
import './styles.css';
export function sum(a, b) {
  return a + b;
}
export const Testing = () => {
  const [isVisible, setIsVisible] = useState(false);
  const handleOnClick = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div>
      <h1>Testing Jest </h1>
      <p>Funkcja sum wynik: {sum(2, 3)}</p>
      <button onClick={handleOnClick}>KLIKNIJ</button>
      <p>Widać czy nie widać? {isVisible && <span>Widać</span>}</p>
    </div>
  );
};
