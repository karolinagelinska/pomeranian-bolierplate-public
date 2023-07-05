import React, { useState } from 'react';

import './styles.css';

import cookies from '../../Images/cookie.svg';

//TODO: Functionality to close cookie agreement

const Cookies = () => {
  const [handleAgreement, setHandleAgreement] = useState(false);
  if (handleAgreement === true) return null;
  else
    return (
      <div className="cookies-agreement">
        <div className="text-wrapper">
          <img className="cookies-icon" src={cookies} alt="cookies icon" />
          <p>
            Pozwól na pliki cookies Nasza strona korzysta z ciasteczek, które
            umożliwiają poprawne działanie strony i pomagają nam świadczyć
            usługi na najwyższym poziomie. Możesz zaakceptować wykorzystanie
            przez nas wszystkich tych plików i przejść do strony lub dostosować
            użycie do swoich referencji. W tym celu kliknij przycisk po prawej
            stronie “dopasuj zgody”, aby następnie wybrać te które odpowiadają
            Twoim indywidualnym preferencjom.
          </p>
        </div>
        <div className="button-wrapper">
          <button className="agree" onClick={setHandleAgreement(true)}>
            w porządku
          </button>
          <button className="customize" onClick={setHandleAgreement(true)}>
            Dopasuj zgody
          </button>
        </div>
      </div>
    );
};

export default Cookies;
