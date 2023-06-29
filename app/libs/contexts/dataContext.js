'use client';

import React, { createContext, useState, useEffect } from 'react';
import jsonTidal from './stations.json';

export const DataContext = createContext({});
const initialStation = '0089';

const url = 'https://admiraltyapi.azure-api.net/uktidalapi/api/V1/Stations';

const key = process.env.API_KEY;

export default function DataProvider({ children }) {
  const [gates, setGates] = useState([]);
  const [tidalStation, setTidalStation] = useState(jsonTidal);
  const [gateStation, setGateStation] = useState(initialStation);

  // useEffect(() => {
  //   async function getData() {
  //     const res = await fetch(url, {
  //       mode: 'cors',
  //       headers: {
  //         'Ocp-Apim-Subscription-Key': key,
  //         'User-Agent': 'My-App',
  //         Accept: '*/*',
  //       },
  //     });
  //     if (!res.ok) {
  //       throw new Error('Failed to fetch data');
  //     }
  //     console.log('WORKING', res.json());
  //     return res.json();
  //   }
  //   getData().then((data) => {
  //     console.log('DATA', data);
  //   });
  // }, []);

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
