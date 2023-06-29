'use client';

import React, { useContext } from 'react';
import { DataContext } from '../../libs/contexts/dataContext';
import Hours from './Hours';

function GatesList() {
  const { gates } = useContext(DataContext);
  console.log(gates);
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
                <Hours />
              </div>
              <ul>
                {el.tides.map((tide) => {
                  return (
                    <li key={tide.DateTime}>
                      <p>
                        {tide.EventType}: DateTime: {tide.DateTime}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default GatesList;
