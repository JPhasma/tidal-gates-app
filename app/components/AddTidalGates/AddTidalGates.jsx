'use client';

import React, { useContext, useState } from 'react';

import { DataContext } from '../../libs/contexts/dataContext';

function AddTidalGates() {
  const initialGateVal = 'High Water';
  const { gates, setGates, tidalStation } = useContext(DataContext);
  const [station, setStation] = useState('Dover');
  const [gateName, setGateName] = useState('');
  const [gateOpens, setGateOpens] = useState(initialGateVal);
  const [gateCloses, setGateCloses] = useState(initialGateVal);
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
    handleResetForm();
  };

  const handleResetForm = () => {
    // clear form states
    setStation('Dover');
    setGateName('');
    setGateOpens(initialGateVal);
    setGateCloses(initialGateVal);
    setComments('');
  };

  const handleSelectGateOpens = (openHour) => {
    setGateOpens(openHour);
  };

  const handleSelectGateCloses = (closeHour) => {
    setGateCloses(closeHour);
  };

  return (
    <section id='add_tidal_gates'>
      <h3>Add Tidal Gate</h3>
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

          <select
            value={gateOpens}
            defaultValue={initialGateVal}
            onChange={(e) => handleSelectGateOpens(e.target.value)}
          >
            <option value='High Water'>High Water</option>
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
          <select
            value={gateCloses}
            defaultValue={initialGateVal}
            onChange={(e) => handleSelectGateCloses(e.target.value)}
          >
            <option value='High Water'>High Water</option>
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

        <button type='submit'>Add Gate</button>
        <button type='button' onClick={handleResetForm}>
          Reset
        </button>
      </form>
    </section>
  );
}

export default AddTidalGates;
