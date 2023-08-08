import './styles.css';

export const MainSection = ({ title, children }) => {
  return (
    <div className="main-section">
      <h2>{title}</h2>
      {children}
    </div>
  );
};
