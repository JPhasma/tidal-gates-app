'use client';

import React, { createContext, useState } from 'react';

export const DataContext = createContext({});

const initialData = [
  { id: 1, name: 'jane' },
  { id: 2, name: 'rane' },
  { id: 3, name: 'plane' },
];

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

export default function DataProvider({ children }) {
  const [data, setData] = useState(initialData);
  const [gates, setGates] = useState(initialGates);

  return (
    <DataContext.Provider value={{ data, setData, gates, setGates }}>
      {children}
    </DataContext.Provider>
  );
}
