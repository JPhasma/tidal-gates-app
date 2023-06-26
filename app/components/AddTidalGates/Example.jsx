'use client';

import React, { useContext } from 'react';
import { DataContext } from '../../libs/contexts/dataContext';

function Example() {
  const { data, setData } = useContext(DataContext);
  return (
    <div>
      <h3>Example:</h3>
      <ul>
        {data.map((el) => {
          return <li key={el.id}>{el.name}</li>;
        })}
      </ul>
      <button onClick={() => setData([...data, { id: 4, name: 'spain' }])}>
        Add
      </button>
    </div>
  );
}

export default Example;
