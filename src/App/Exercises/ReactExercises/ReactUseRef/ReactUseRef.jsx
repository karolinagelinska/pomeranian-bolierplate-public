import { useRef } from 'react';
import './styles.css';
import { useEffect } from 'react';

export const ReactUseRef = () => {
  const inputRef = useRef(null);

  const targetRef = useRef(null);
  const scrollToTarget = () => {
    return targetRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    inputRef.current.focus();
    scrollToTarget();
  }, []);
  return (
    <div>
      <div className="container--react-usse-ref">
        <label htmlFor="">Input without useRef</label>
        <input type="text" />
        <label htmlFor="">Input with useRef</label>
        <input type="text" ref={inputRef} />

        {/*scroll to specific element after render*/}

        <div className="container--react-scroll-into-view">
          <div ref={targetRef}></div>
        </div>
      </div>
    </div>
  );
};
