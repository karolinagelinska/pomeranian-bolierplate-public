import React from 'react';
import { Route, Routes, useLocation, useRoutes } from 'react-router-dom';

import { GoBackLink } from '../../Components/GoBack/GoBack';
import { getRouterMetaDataByCurrentPath } from '../../router-data/getRouterMetaDataByCurrentPath';

import { ExerciseItemHeader } from '../ExerciseItemHeader';

import {
  blockRouterData as htmlBlockRouterData,
  blockRouterMetaData as htmlBlockRouterMetaData,
} from './view-router-data';
import { ExerciseLinks } from './ExerciseLinks';
import './styles.css';

export function HtmlCssExercises() {
  const element = useRoutes(htmlBlockRouterData);

  return (
    <div className="exercises-wrapper">
      <p>Ćwiczenia</p>
      <div className="go-back-link">
        <GoBackLink label="X" />
      </div>

      <hr />

      <Routes>
        <Route path="" element={<ExerciseLinks />} />
      </Routes>

      {element}
    </div>
  );
}

export function HtmlCssExerciseItem() {
  const element = useRoutes(htmlBlockRouterData);

  const location = useLocation();

  const { pathname } = location;
  // const pathname = location.pathname

  const exerciseRouteData = getRouterMetaDataByCurrentPath(
    pathname,
    htmlBlockRouterMetaData
  );

  return (
    <div className="exercise-item-layout">
      <ExerciseItemHeader data={exerciseRouteData} />

      <hr />

      <div className="exercise-item-content">{element}</div>
    </div>
  );
}
