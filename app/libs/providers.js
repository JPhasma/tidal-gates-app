'use client';

import { ThemeProvider } from 'next-themes';
import { DataProvider } from './contexts/dataContext';

const Providers = ({ children }) => {
  return <ThemeProvider attribute='class'>{children}</ThemeProvider>;
};

export default Providers;
