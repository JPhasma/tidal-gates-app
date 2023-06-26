'use client';

import { ThemeProvider } from 'next-themes';
import DataProvider from './contexts/dataContext';

export const Providers = ({ children }) => {
  return (
    <ThemeProvider attribute='class'>
      <DataProvider>{children}</DataProvider>
    </ThemeProvider>
  );
};

export default Providers;
