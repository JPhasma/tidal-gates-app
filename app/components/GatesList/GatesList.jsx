'use client';

import React, { useContext } from 'react';
import { DataContext } from '../../libs/contexts/dataContext';

function GatesList() {
  const { gates } = useContext(DataContext);
  return (
    <div id='gates_list'>
      <ul>
        {gates.map((el) => {
          return (
            <li key={el.id}>
              <div className='gate_container'>
                <h3>{el.gateName}</h3>
                <p>Based on selected Tidal Station: {el.station}</p>
                <p>
                  Gate Opens: {el.gateOpens}, Gate Closes: {el.gateCloses}
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
