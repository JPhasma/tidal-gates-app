import React from 'react';

function TimeSelect(val, func) {
  return (
    <select value={val} onChange={(e) => func(e.target.value)}>
      <option value='High Water'>High Water</option>
      <option value='-1'>-1</option>
      <option value='-2'>-2</option>
      <option value='-3'>-3</option>
      <option value='-4'>-4</option>
      <option value='-5'>-5</option>
      <option value='-6'>-6</option>
    </select>
  );
}

export default TimeSelect;
