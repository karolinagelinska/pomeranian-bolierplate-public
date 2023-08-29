import React from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';

import { NotFound } from './App/Components/NotFound/NotFound';

import { Blocks } from './App/Blocks';
import { Layout } from './App/Layout';
import { Dashboard } from './App/Dashboard';
import { Exercises } from './App/Exercises';
import { MyCV } from './App/MyCV/MyCV';
import { Settings } from './App/Settings/Settings';
import { FAQ } from './App/FAQ/Faq';
import { HitTheMoleGame } from './App/Exercises/Js/HitTheMoleGame/HitTheMoleGame';
import { MemoGame } from './App/Exercises/Js/MemoGame/MemoGame';
import { FormExercise } from './App/Exercises/ReactExercises/Forms/Forms';
import { TechStack } from './App/TechStack/TechStack';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Layout withSidebar />}>
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard/*" element={<Dashboard />} />
          <Route path="exercises/*" element={<Exercises />} />
          <Route path="blocks/*" element={<Blocks />} />
          <Route path="*" element={<NotFound />} />
          <Route path="MyCV/*" element={<MyCV />} />
          <Route path="Settings/*" element={<Settings />} />
          <Route path="FAQ/*" element={<FAQ />} />
          <Route path="HitTheMole/*" element={<HitTheMoleGame />} />
          <Route path="MemoGame/*" element={<MemoGame />} />
          <Route path="Form/*" element={<FormExercise />} />
          <Route path="TechStack/*" element={<TechStack />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
