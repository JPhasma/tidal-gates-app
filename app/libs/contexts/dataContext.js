'use client';

import React, { createContext } from 'react';

export const DataContext = createContext({});

const initialData = [
  { id: 1, name: 'jane' },
  { id: 2, name: 'rane' },
];

export default function DataProvider({ children }) {
  // const [data, setData] = useState(initialData);
  const data = initialData;

  return <DataContext.Provider value='data'>{children}</DataContext.Provider>;
}
