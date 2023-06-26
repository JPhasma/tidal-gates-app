'use client';

import React, { useContext, useState } from 'react';

import { DataContext } from '../../libs/contexts/dataContext';

import Example from './Example';

function AddTidalGates() {
  const { gates, setGates } = useContext(DataContext);
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
  };
  return (
    <section>
      <h3>AddTidalGates</h3>
      <form onSubmit={handleAddGate}>
        <div>
          <label>Station: </label>
          <select value={station} onChange={(e) => setStation(e.target.value)}>
            <option value='Dover'>Dover (tidal atlas default)</option>
            <option value='Caernarfon'>Caernarfon</option>
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
          <input
            type='text'
            value={gateOpens}
            onChange={(e) => setGateOpens(e.target.value)}
          ></input>
        </div>
        <div>
          <label>Gate Closes: </label>
          <input
            type='text'
            value={gateCloses}
            onChange={(e) => setGateCloses(e.target.value)}
          ></input>
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
    </section>
  );
}

export default AddTidalGates;
