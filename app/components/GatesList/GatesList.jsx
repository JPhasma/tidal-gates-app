'use client';

import React, { useContext } from 'react';
import { DataContext } from '../../libs/contexts/dataContext';

function GatesList() {
  const { gates } = useContext(DataContext);
  return (
    <div>
      <ul>
        {gates.map((el) => {
          return (
            <li key={el.id}>
              <div>
                <h3>{el.gateName}</h3>
                <p>{el.station}</p>
                <p>
                  gateOpens: {el.gateOpens}, gateCloses: {el.gateCloses}
                </p>
                <p>Comments: {el.comments}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default GatesList;
