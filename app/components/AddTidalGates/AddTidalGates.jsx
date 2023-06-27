'use client';

import React, { useContext, useState } from 'react';

import { DataContext } from '../../libs/contexts/dataContext';

function AddTidalGates() {
  const { gates, setGates, tidalStation } = useContext(DataContext);
  const [station, setStation] = useState('Dover');
  const [gateName, setGateName] = useState('');
  const [gateOpens, setGateOpens] = useState('');
  const [gateCloses, setGateCloses] = useState('');
  const [comments, setComments] = useState('');

  const handleAddGate = (e) => {
    e.preventDefault();
    const newGate = {
      station,
      gateName,
      gateOpens,
      gateCloses,
      comments,
    };
    setGates([...gates, newGate]);
    console.log('Add a tidal gate', newGate);

    // clear form states
    setStation('Dover');
    setGateName('');
    setGateOpens('');
    setGateCloses('');
    setComments('');
  };

  const handleSelectGateOpens = (openHour) => {
    setGateOpens(openHour);
  };

  const handleSelectGateCloses = (closeHour) => {
    setGateCloses(closeHour);
  };

  return (
    <section>
      <h3>AddTidalGates</h3>
      <form onSubmit={handleAddGate}>
        <div>
          <label>Station: </label>
          <select value={station} onChange={(e) => setStation(e.target.value)}>
            <option value='0089-Dover'>Dover</option>
            {tidalStation.map((tidal) => {
              return (
                <option
                  key={tidal.properties.Id}
                  value={`${tidal.properties.Id}-${tidal.properties.Name}`}
                >
                  {tidal.properties.Name}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <label>Gate Name: </label>
          <input
            type='text'
            value={gateName}
            onChange={(e) => setGateName(e.target.value)}
          ></input>
        </div>
        <div>
          <label>Gate Opens: </label>

          <select onChange={(e) => handleSelectGateOpens(e.target.value)}>
            <option value='0'>High Water</option>
            <option value='-1'>-1</option>
            <option value='-2'>-2</option>
            <option value='-3'>-3</option>
            <option value='-4'>-4</option>
            <option value='-5'>-5</option>
            <option value='-6'>-6</option>
          </select>

          {/* <HourOption handleSelect={handleSelectGateOpens} /> */}
        </div>
        <div>
          <label>Gate Closes: </label>
          <select onChange={(e) => handleSelectGateCloses(e.target.value)}>
            <option value='0'>High Water</option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
            <option value='6'>6</option>
          </select>
        </div>
        <div>
          <label>Comments: </label>
          <input
            type='text'
            value={comments}
            onChange={(e) => setComments(e.target.value)}
          ></input>
        </div>
        <button>Add Gate</button>
      </form>
      <div>
        <h3>tidal</h3>
      </div>
    </section>
  );
}

export default AddTidalGates;
