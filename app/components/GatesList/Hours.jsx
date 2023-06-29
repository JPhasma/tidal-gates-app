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

function Hours(props) {
  const { time, open, close } = props;

  // Remove seconds from the time value
  const timeWithoutSeconds = time.slice(0, -3);

  const calcTime = (time, adjust) => {
    let newTime = 'working on it';
    if (adjust === 'High Water') {
      newTime = 'High Water';
    } else {
      // split the time string into hours and minutes
      const [hours, minutes] = time.split(':').map(Number);

      // convert adjust to integer and add (or subtract if negative) from the hours
      const adjustedHours = hours + parseInt(adjust);

      // if the adjusted hours are negative, add 24 to get the correct time
      const finalHours = adjustedHours < 0 ? adjustedHours + 24 : adjustedHours;

      // format the final time as a string with leading zeros
      newTime = `${finalHours.toString().padStart(2, '0')}:${minutes
        .toString()
        .padStart(2, '0')}`;
    }
    return newTime;
  };

  // calculate the open time
  const openTime = calcTime(timeWithoutSeconds, open);

  // calculate the closing time
  const closeTime = calcTime(timeWithoutSeconds, close);

  return (
    <div>
      {/* <span className='day_container'>Day:</span>
       */}
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
      <p>
        {timeWithoutSeconds}-HighWater Tidal gate is between: {openTime} and{' '}
        {closeTime}
      </p>
    </div>
  );
}

export default Hours;
