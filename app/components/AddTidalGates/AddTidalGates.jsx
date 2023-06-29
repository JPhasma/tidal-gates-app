'use client';

import React, { useContext, useState } from 'react';

import { DataContext } from '../../libs/contexts/dataContext';

function AddTidalGates() {
  const initialGateVal = 'High Water';
  const { gates, setGates, tidalStation, setGateStation } =
    useContext(DataContext);
  const [station, setStation] = useState('Dover');
  const [gateName, setGateName] = useState('');
  const [gateOpens, setGateOpens] = useState(initialGateVal);
  const [gateCloses, setGateCloses] = useState(initialGateVal);
  const [comments, setComments] = useState('');

  const [gatesId, setGatesId] = useState(0);

  const handleAddGate = async (e) => {
    e.preventDefault();

    // fetch url using Next13 new API handlers
    // helps to bypass CORS issue
    const stationParts = station.split('-');
    const stationNumber = stationParts[0].substring(0, 4);
    const stationName = stationParts[1] ? stationParts[1] : 'Dover';
    const admiraltyID = stationNumber !== 'Dove' ? stationNumber : '0089';
    const url = `/api/admiralty?id=${admiraltyID}`;

    try {
      // fetch data via api handler
      const response = await fetch(url);
      const data = await response.json();
      const tides = data;

      const newGate = {
        station: stationName,
        gateName,
        gateOpens,
        gateCloses,
        comments,
        id: gatesId,
        tides,
      };

      setGates([...gates, newGate]);
      setGatesId(gatesId + 1);
      console.log('Add a tidal gate', newGate);
      handleResetForm();
    } catch (error) {
      console.error(error);
    }
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
      <p>
        NB: this is still a work in progress, but you can try this app by adding
        some inputs eg:
      </p>
      <ul>
        <li>
          Station: select <em>Caernarfon</em>
        </li>
        <li>
          Gate Name: type <em>Caernarfon Bar</em> as a name{' '}
        </li>
        <li>
          Gate Opens: select <em>-3</em> hours before High Water
        </li>
        <li>
          Gate Close: select <em>3</em> hours after High Water
        </li>
        <li>
          Comments: <em>ONLY attempt to cross the Bar between these times</em>
        </li>
      </ul>
      <br />
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
        </div>
        <div>
          <label>Gate Closes: </label>
          <select
            value={gateCloses}
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
        <button type='button' onClick={handleResetForm} id='reset'>
          Reset
        </button>
      </form>
    </section>
  );
}

export default AddTidalGates;
