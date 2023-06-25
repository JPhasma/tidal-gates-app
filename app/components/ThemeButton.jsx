'use client';

import { useTheme } from 'next-themes';
import React, { use } from 'react';

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
