import './styles.css';
export const MemoGameSettings = ({
  numberOfTiles,
  setNumberOfTiles,
  startGame,
  setGameIsActive,
}) => {
  const numberOfTilesOption = [
    { label: '8 elementów', value: 8 },
    { label: '16 elementów', value: 16 },
    { label: '20 elementów', value: 20 },
  ];
  return (
    <div>
      <p>
        Gra polegająca na zapamiętywaniu odkrytych kafli i łączeniu ich w pary
      </p>

      <div className="memoGameSettings">
        <h4>LICZBA ELEMENTÓW</h4>
        {numberOfTilesOption.map(({ label, value }) => (
          <button
            className={numberOfTiles === value ? 'activeButton' : ''}
            onClick={() => {
              setNumberOfTiles(value);
            }}
          >
            {label}
          </button>
        ))}

        <h4>PRZYCISKI STERUJĄCE</h4>
        <button onClick={startGame}>START</button>
      </div>
    </div>
  );
};
