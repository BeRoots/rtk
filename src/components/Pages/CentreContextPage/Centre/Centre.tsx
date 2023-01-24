import React, { useContext, useEffect } from 'react';
import './Centre.scss';

import { CentreContext, CentreContextType } from '../../../../contexts/CentreContextProvider';

function Centre() {
  const { centre, loadCentreName } = useContext(CentreContext) as CentreContextType;
  const centreNameElement = (centre.Nom === undefined)
        ? <h3 className='default'>State CentreContext.Nom = "undefined"</h3>
        : <h3>State CentreContext.Nom = "{centre.Nom}"</h3>;

  let centreParamElement, centreNameElementChildren
  if (centre.Params === undefined) {
    centreParamElement = <h3 className='default'>Paramètres de centre non chargés. Click le bouton 😀</h3>;
  }
  else {
    centreNameElementChildren = Object.entries(centre.Params).map((d) => <li>{d[0]+": "+d[1]}</li>);
    centreParamElement = <ul>{centreNameElementChildren}</ul>;
  }

  useEffect(() => {
      console.log('in useEffect');
      if (centre.Nom === undefined)
      {
        loadCentreName();
        // console.log('end useEffect');
      }
    }, []);

  return (
    <div className="centre">
      <h1>CentreContext.Nom</h1>
      <p>Requêtes d'API /centre depuis ce composant au <i>componentDidMount()</i> (via hook useEffect).
        <br/>Valeur par défaut explicite si le context n'est pas chargé. Valeur du state du context si chargé.</p>
      {centreNameElement}
      <h1>CentreContext.Params</h1>
      <p>Pas de requêtes d'API depuis ce composant au <i>componentDidMount()</i> (via hook useEffect).
        <br />Requêtes d'API /params depuis le composant bouton.
        <br/>Valeur par défaut explicite si le context n'est pas chargé. Valeur du state du context si chargé.</p>
      {centreParamElement}
    </div>
  );
}

export default Centre;
