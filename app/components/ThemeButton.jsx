'use client';

import React from 'react';
import { useTheme } from 'next-themes';

function ThemeButton() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
    >
      Theme: {resolvedTheme === 'dark' ? 'light' : 'dark'}
    </button>
  );
}

export default ThemeButton;
