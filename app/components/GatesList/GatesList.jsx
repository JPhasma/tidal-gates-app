'use client';

import React, { useContext } from 'react';
import { DataContext } from '../../libs/contexts/dataContext';
import Hours from './Hours';

const processDateTime = () => {
  console.log('processDateTime');
};

function GatesList() {
  const { gates } = useContext(DataContext);
  console.log(gates);
  return (
    <div id='gates_list'>
      {gates.length !== 0 && <h1>Gates</h1>}
      <ul>
        {gates.map((el) => {
          processDateTime();
          return (
            <li key={el.id}>
              <div className='gate_container'>
                <h3>{el.gateName}</h3>
                <p>Based on selected Tidal Station: {el.station}</p>
                <p>
                  Gate Opens:
                  {el.gateOpens === 'High Water'
                    ? el.gateOpens
                    : ` ${el.gateOpens} hours before High Water`}
                </p>
                <p>
                  Gate Closes:{' '}
                  {el.gateCloses === 'High Water'
                    ? el.gateCloses
                    : ` ${el.gateCloses} hours after High Water`}
                </p>
                <p>Comments: {el.comments}</p>

                <ul>
                  {el.tides.map((tide) => {
                    if (tide.EventType === 'HighWater') {
                      return (
                        <li key={tide.DateTime} className='hoursUI'>
                          <p>High Water: DateTime: {tide.DateTime}</p>
                          <Hours date='erm' highWater='yep' />
                        </li>
                      );
                    }
                  })}
                </ul>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default GatesList;
