import React, { useState, useContext } from 'react';
import './ButtonGetCentre.scss';

import { ICentre, CentreContext, CentreContextType } from '../../../../contexts/CentreContextProvider';

function ButtonGetCentre() {
  const {loadCentreParams} = useContext(CentreContext) as CentreContextType;

  return (
    <button className="button-getcentre" onClick={loadCentreParams}>Get Centre Params</button>
  );
}

export default ButtonGetCentre;
