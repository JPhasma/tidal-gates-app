'use client';

import React, { createContext, useState } from 'react';

export const DataContext = createContext({});

const initialData = [
  { id: 1, name: 'jane' },
  { id: 2, name: 'rane' },
  { id: 3, name: 'plane' },
];

export default function DataProvider({ children }) {
  const [data, setData] = useState(initialData);
  // const data = initialData;

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
}
