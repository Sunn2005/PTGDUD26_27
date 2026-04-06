import React from 'react';
import { useSetRecoilState } from 'recoil';
import { countState } from '../recoil/CounterState';

const ComponentB = () => {
  const setCount = useSetRecoilState(countState);

  return (
    <div>
      <h2>Component B</h2>
      <button onClick={() => setCount(prev => prev + 1)}>Tăng (+)</button>
      <button onClick={() => setCount(prev => prev - 1)} >Giảm (-)</button>
    </div>
  );
};

export default ComponentB;