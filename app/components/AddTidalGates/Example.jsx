'use client';

import React, { useContext } from 'react';
import { DataContext } from '../../libs/contexts/dataContext';

function Example() {
  const val = useContext(DataContext);
  return <div>Example: {val}</div>;
}

export default Example;
