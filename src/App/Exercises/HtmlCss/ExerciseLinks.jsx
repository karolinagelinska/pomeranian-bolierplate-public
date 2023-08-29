import { Link } from 'react-router-dom';

import { blockRouterMetaData } from './view-router-data';
import './styles.css';

export const ExerciseLinks = () => {
  return (
    <ul className="exercises-list">
      {blockRouterMetaData.map((blockMetaData) => (
        <li key={blockMetaData.path}>
          <Link to={blockMetaData.path}>
            <p>{blockMetaData.linkLabel}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};
