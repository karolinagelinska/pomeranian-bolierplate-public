import { useState } from 'react';
import { DashboardCard } from '../Components/DashboardCard/DashboardCard';
import './styles.css';
import personalCard from '../Images/tiles/personalcard.svg';
import edit from '../Images/tiles/edit.svg';
import faq from '../Images/faq.svg';

export const Dashboard = () => {
  const [availableCards, setAvailableCards] = useState([
    {
      sectionTitle: 'Moje CV',
      icon: <img src={personalCard} alt="buisness card resume" />,
      description: 'podgląd cv wraz z doświadczeniem',
      link: '/MyCV',
    },
    {
      sectionTitle: ' Ćwiczenia',
      icon: <img src={edit} alt="edit icon" />,
      description: 'wszystkie wykonane ćwiczenia',
      link: '/Exercises',
    },
    {
      sectionTitle: 'Blog',
      icon: <img src={personalCard} alt="business card resume" />,
      description: 'wpisy blogowe o technologii front-end',
      link: '/blog',
    },
    {
      sectionTitle: 'Tech stack',
      icon: <img src={personalCard} alt="business card resume" />,
      description: 'stack technologiczny realizowany na kursie',
      link: '/tech',
    },
    {
      sectionTitle: 'FAQ',
      icon: <img src={faq} alt="faq icon" />,
      description: 'odpowiedzi na najczęstsze pytania',
      link: '/faq',
    },
  ]);
  return (
    <div className="dashboard">
      <div className="header">
        <h3 className="greeting">Hej, tu Karolina!</h3>
        <p>
          Poniżej znajdziesz najważniejsze informacje na temat mojej
          działalności
        </p>
      </div>
      <div className="links">
        {availableCards.map((card) => {
          return (
            <DashboardCard
              sectionTitle={card.sectionTitle}
              description={card.description}
              link={card.link}
              icon={card.icon}
            />
          );
        })}
      </div>
      <div className="aside">
        <div className="foto-container"></div>
        <h3 className="personal-info-name">Karolina Gelińska</h3>
        <p className="personal-info-city">Puck</p>
        <p>e-mail: kar.gelinska@gmail.com</p>
        <p>telefon: 535 074 885</p>
      </div>
    </div>
  );
};
