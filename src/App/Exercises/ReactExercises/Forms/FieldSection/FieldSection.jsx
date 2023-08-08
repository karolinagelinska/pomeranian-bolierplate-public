import './styles.css';

export const FieldSection = ({ title, children }) => {
  return (
    <div className="field-section">
      <h4>{title}</h4>
      {children}
    </div>
  );
};
