import React from 'react';
import { NavLink } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import { NotFound } from '../Components/NotFound/NotFound';
import htmlIcon from '../Images/tech-stack/html.svg';
import jsIcon from '../Images/tech-stack/js.svg';
import reactIcon from '../Images/tech-stack/react.svg';

import './categories.css';

export const Categories = () => {
  return (
    <div className="exercises-categories">
      <p>Kategorie</p>

      <NavLink className="categories-link" to="html-css">
        <img src={htmlIcon} alt="html-icon" />
        <p>HTML & CSS</p>
      </NavLink>
      <NavLink className="categories-link" to="js">
        <img src={jsIcon} alt="js-icon" />
        <p>JS</p>
      </NavLink>
      <NavLink className="categories-link" to="react">
        <img src={reactIcon} alt="react-icon" />
        <p>React</p>
      </NavLink>
    </div>
  );
};
