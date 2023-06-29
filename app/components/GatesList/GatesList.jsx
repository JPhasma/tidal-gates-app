'use client';

import React, { useContext } from 'react';
import { DataContext } from '../../libs/contexts/dataContext';
import Hours from './Hours';

const processDateTime = (dt) => {
  const [date, time] = dt.split('T');
  const [year, month, day] = date.split('-');
  const newDate = `${day} / ${month} / ${year}`;

  return { newDate, time };
};

function GatesList() {
  const { gates } = useContext(DataContext);
  console.log(gates);
  return (
    <div id='gates_list'>
      {gates.length !== 0 && <h1>Gates</h1>}
      <ul>
        {gates.map((el) => {
          return (
            <li key={el.id}>
              <div className='gate_container'>
                <h2>{el.gateName}</h2>
                <p>Based on selected Tidal Station:</p>
                <h4>{el.station}</h4>
                <p>
                  Gate Opens:
                  {el.gateOpens === 'High Water'
                    ? el.gateOpens
                    : ` ${el.gateOpens} hours before High Water`}
                </p>
                <p>
                  Gate Closes:
                  {el.gateCloses === 'High Water'
                    ? el.gateCloses
                    : ` ${el.gateCloses} hours after High Water`}
                </p>
                {el.comments && <p>Comments: {el.comments}</p>}
                <ul>
                  {el.tides.map((tide) => {
                    if (tide.EventType === 'HighWater') {
                      const { newDate, time } = processDateTime(tide.DateTime);
                      return (
                        <li key={tide.DateTime} className='hoursUI'>
                          <h3>{newDate}</h3>
                          <p>High Water: {time.slice(0, -3)}</p>
                          <Hours
                            time={time}
                            open={el.gateOpens}
                            close={el.gateCloses}
                          />
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
