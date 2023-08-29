import { NavLink } from 'react-router-dom';
import { HouseIcon } from './../Components/Icons/HouseIcon.jsx';
import { ElementIcon } from './../Components/Icons/ElementIcon.jsx';
import { EditIcon } from './../Components/Icons/EditIcon.jsx';
import { PersonalCardIcon } from './../Components/Icons/PersonalCardIcon.jsx';
import { SettingIcon } from './../Components/Icons/SettingIcon.jsx';

import './styles/aside.css';
import { FAQIcon } from '../Components/Icons/FAQIcon.jsx';

export function AppAside() {
  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li>
            <NavLink className="aside-row" to="Dashboard">
              <HouseIcon className="menu-icon" />
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink className="aside-row" to="MyCV">
              <PersonalCardIcon className="menu-icon" />
              Moje CV
            </NavLink>
          </li>
          <li>
            <NavLink className="aside-row" to="TechStack">
              <HouseIcon className="menu-icon" />
              Tech-stack
            </NavLink>
          </li>

          <li>
            <NavLink className="aside-row" to="Exercises">
              <EditIcon className="menu-icon" />
              Ćwiczenia
            </NavLink>
          </li>
          <li>
            <NavLink className="aside-row" to="HitTheMole">
              <FAQIcon className="menu-icon" />
              Gra | kret
            </NavLink>
          </li>
          <li>
            <NavLink className="aside-row" to="MemoGame">
              <FAQIcon className="menu-icon" />
              Gra | memo
            </NavLink>
          </li>
          <li>
            <NavLink className="aside-row" to="Form">
              <FAQIcon className="menu-icon" />
              Formularz
            </NavLink>
          </li>
          <li>
            <NavLink className="aside-row" to="FAQ">
              <FAQIcon className="menu-icon" />
              FAQ
            </NavLink>
          </li>
          <p className="separating-line"></p>
          <li>
            <NavLink className="aside-row" to="Settings">
              <SettingIcon className="menu-icon" />
              Ustawienia
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
