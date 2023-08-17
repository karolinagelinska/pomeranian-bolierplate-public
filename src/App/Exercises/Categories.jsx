import React from 'react';
import { NavLink } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import { NotFound } from '../Components/NotFound/NotFound';

import './categories.css';

export const Categories = () => {
  return (
    <Routes>
      <Route path="" element={<CategoriesLayout />}></Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
  function CategoriesLayout() {
    return (
      <div className="exercises-categories">
        <h2>Kategorie</h2>

        <NavLink to="html-css">HTML & CSS</NavLink>
        <NavLink to="js">JS </NavLink>
        <NavLink to="react">React </NavLink>
      </div>
    );
  }
};
