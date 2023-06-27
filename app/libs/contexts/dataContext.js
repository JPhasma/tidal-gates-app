'use client';

import React, { createContext, useState, useEffect } from 'react';
import jsonTidal from './stations.json';

export const DataContext = createContext({});
const initialStation = '0089';

// const url = `https://admiraltyapi.azure-api.net/uktidalapi/api/V1/Stations/${gateStation}/TidalEvents?duration=3`;

const key = process.env.API_KEY;

export default function DataProvider({ children }) {
  const [gates, setGates] = useState([]);
  const [tidalStation, setTidalStation] = useState(jsonTidal);
  const [gateStation, setGateStation] = useState(initialStation);

  // useEffect(() => {
  //   getData().then((data) => {
  //     console.log('DATA: ', data);
  //   });
  // }, [gateStation]);

  useEffect(() => {
    const url = `https://admiraltyapi.azure-api.net/uktidalapi/api/V1/Stations/${gateStation}/TidalEvents`;

    async function fetchData() {
      try {
        const res = await fetch(url, {
          mode: 'cors',
          headers: {
            'Ocp-Apim-Subscription-Key': key,
            'User-Agent': 'My-App',
            Accept: '*/*',
          },
        });
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await res.json();
        console.log('DATA: ', data);
      } catch (error) {
        console.error('ERROR SADLY', error);
      }
    }

    fetchData();
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
