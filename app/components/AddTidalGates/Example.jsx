'use client';

import React, { useContext } from 'react';
import { DataContext } from '../../libs/contexts/dataContext';

function Example() {
  const val = useContext(DataContext);
  return (
    <div>
      <h3>Example:</h3>
      {val.map((el) => {
        return <h5 key={el.id}>{el.name}</h5>;
      })}
    </div>
  );
}

export default Example;
