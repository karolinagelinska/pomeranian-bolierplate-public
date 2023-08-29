import './styles.css';
import { Route, Routes } from 'react-router-dom';
import { NotFound } from '../Components/NotFound/NotFound';
import arrowDown from '../Images/toggle-arrow.svg';
import htmlIcon from '../Images/tech-stack/html.svg';
import jsIcon from '../Images/tech-stack/js.svg';
import reactIcon from '../Images/tech-stack/react.svg';
import githubIcon from '../Images/tech-stack/githuub.svg';
import vscodeIcon from '../Images/tech-stack/vscode-alt 1.png';
import discordIcon from '../Images/tech-stack/discord-icon-svgrepo-com 3.png';
import cssIcon from '../Images/tech-stack/cssicon.svg';

export const TechStack = () => {
  return (
    <Routes>
      <Route path="" element={<TechStackLayout />}></Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
function TechStackLayout() {
  return (
    <>
      <div className="page-title">
        <img src={arrowDown} />
        <h1>TECH STACK</h1>
      </div>
      <p>
        Poniżej znajdziesz tech stack oraz narzędzia, jakich nauczyłam się
        podczas kursu.
      </p>
      <div className="tech-stack-container">
        <div className="tech-stack-element">
          <img src={cssIcon} alt="" />
          css
        </div>
        <div className="tech-stack-element">
          <img src={htmlIcon} alt="" />
          html
        </div>
        <div className="tech-stack-element">
          <img src={jsIcon} alt="" />
          javascript
        </div>
        <div className="tech-stack-element">
          <img src={reactIcon} alt="" />
          react
        </div>
        <div className="tech-stack-element">
          <img src={githubIcon} alt="" />
          github
        </div>
        <div className="tech-stack-element">
          <img src={vscodeIcon} alt="" />
          vscode
        </div>
        <div className="tech-stack-element">
          <img src={discordIcon} alt="" />
          discord
        </div>
      </div>
    </>
  );
}
