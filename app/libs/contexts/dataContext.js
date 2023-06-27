'use client';

import React, { createContext, useState, useEffect } from 'react';
import jsonTidal from './stations.json';

export const DataContext = createContext({});

const initialGates = [
  {
    id: 1,
    station: 'Caernarfon',
    gateName: 'Caernarfon Bar',
    gateOpens: '13:00',
    gateCloses: '19:00',
    comments: 'Do NOT attempt to cross the Bar outside of these times!',
  },
  {
    id: 2,
    station: 'Dover',
    gateName: 'The Swellies',
    gateOpens: '11:00',
    gateCloses: '12:00',
    comments:
      'If you miss this, the tide increases by 1knot every 10 minutes and likely be smashed against the many rocks',
  },
];

const url =
  'https://admiraltyapi.azure-api.net/uktidalapi/api/V1/Stations/0089/TidalEvents?duration=3';

const key = process.env.API_KEY;

async function getData() {
  const res = await fetch(url, {
    mode: 'cors',
    headers: {
      'Ocp-Apim-Subscription-Key': key,
      'User-Agent': 'My-App',
      Accept: '*/*',
    },
  });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
  console.log('RES: ', res.json());
  return res.json();
}

export default function DataProvider({ children }) {
  const [gates, setGates] = useState(initialGates);
  const [tidalStation, setTidalStation] = useState(jsonTidal);
  const [gateStation, setGateStation] = useState('0089');

  useEffect(() => {
    getData().then((data) => {
      console.log('DATA: ', data);
    });
  }, [gateStation]);

  return (
    <DataContext.Provider
      value={{
        gates,
        setGates,
        tidalStation,
        setTidalStation,
        gateStation,
        setGateStation,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
