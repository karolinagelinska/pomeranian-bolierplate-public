import './styles.css';
import { ExerciseUsingServer } from './ExerciseUsingServer';

export const PromiseMethodsTraining = () => {
  const fetchDataFast = () =>
    new Promise((resolve) =>
      setTimeout(() => {
        resolve({ id: 1, time: 300 });
      }, 300)
    );
  const fetchDataLong = () =>
    new Promise((resolve) =>
      setTimeout(() => {
        resolve({ id: 2, time: 700 });
      }, 700)
    );
  const fetchDataError = () =>
    new Promise((_, reject) =>
      setTimeout(() => {
        reject(new Error('Błąd pobierania danych'));
      }, 500)
    );

  const cb = (log) => {
    if (log.status === 'rejected') {
      console.error(log?.reason?.stack);
    } else {
      console.log(log);
    }
  };
  const logger = (log) => console.log(log);
  const logMultiple = (logs) => logs.forEach(cb);
  const errorLogger = (error) => console.error(error);

  return (
    <div>
      <button onClick={() => fetchDataFast.then(logger)}>fetchDataFast</button>
      <button onClick={() => fetchDataLong.then(logger)}>fetchDataLong</button>
      <button onClick={() => fetchDataError.then(logger)}>
        fetchDataError
      </button>
      <button
        onClick={() =>
          Promise.all([
            fetchDataFast(),
            fetchDataLong(),
            fetchDataError(),
          ]).then(logger)
        }
      >
        Get all
      </button>
      <button
        onClick={() =>
          Promise.all([fetchDataFast(), fetchDataLong(), fetchDataError()])
            .then(logger)
            .catch(errorLogger)
        }
      >
        Get all errors
      </button>
      <button
        onClick={() =>
          Promise.allSettled([
            fetchDataFast(),
            fetchDataLong(),
            fetchDataError(),
          ])
            .then(logger)
            .catch(errorLogger)
        }
      >
        All settled
      </button>
      <button
        onClick={() =>
          Promise.allSettled([
            fetchDataFast(),
            fetchDataLong(),
            fetchDataError(),
          ])
            .then(logger)
            .catch(errorLogger)
        }
      >
        All settled with error
      </button>
      <button
        onClick={() =>
          Promise.any([fetchDataFast(), fetchDataLong()])
            .then(logMultiple)
            .catch(errorLogger)
        }
      >
        Get any without error
      </button>
      <button
        onClick={() =>
          Promise.any([fetchDataFast(), fetchDataLong(), fetchDataError()])
            .then(logMultiple)
            .catch(errorLogger)
        }
      >
        Get any with error
      </button>
      <ExerciseUsingServer />
    </div>
  );
};
