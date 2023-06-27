'use client';

import { ThemeProvider } from 'next-themes';
import DataProvider from './contexts/dataContext';

export const Providers = ({ children }) => {
  return <DataProvider>{children}</DataProvider>;
};

export default Providers;
