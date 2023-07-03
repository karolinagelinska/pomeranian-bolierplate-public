import { useState } from 'react';
import './styles.css';
import { useEffect } from 'react';

export const Time = () => {
  const [napis, setNapis] = useState('jakiś napis');

  useEffect(() => {
    setTimeout(() => {
      setNapis('');
    }, 2000);
  }, []);

  return <>{napis}</>;
};
