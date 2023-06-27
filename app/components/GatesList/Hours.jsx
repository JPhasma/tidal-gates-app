import React from 'react';

const hours = [
  '00',
  '01',
  '02',
  '03',
  '04',
  '05',
  '06',
  '07',
  '08',
  '09',
  '11',
  '12',
  '13',
  '14',
  '15',
  '16',
  '17',
  '18',
  '19',
  '20',
  '21',
  '22',
  '23',
  '24',
];

function Hours() {
  return (
    <div>
      <span className='day_container'>Day:</span>
      <p>Date: </p>
      <p>High Water is at: </p>
      <h4>Tidal gates for 24 hours ahead are: </h4>
      <div className='hours_container'>
        {hours.map((hour, i) => {
          return (
            <div className='hour' key={i}>
              {hour}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Hours;
