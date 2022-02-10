import React, { CSSProperties, useState } from 'react';

import { useAppSelector, useAppDispatch } from '../store/hooks';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount
} from '../store/slices/counterSlice';

const styles: { [classname: string]: CSSProperties } = {
  container: {
    backgroundColor: '#ffffff',
    padding: 10
  }
};

const ReduxTest: React.FC = () => {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');
  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div style={styles.container}>
      <div className="flex">
        <button onClick={() => dispatch(decrement())}>-</button>
        <span>{count}</span>
        <button onClick={() => dispatch(increment())}>+</button>
      </div>
      <div className="flex">
        <input value={incrementAmount} onChange={e => setIncrementAmount(e.target.value)} />
        <button onClick={() => dispatch(incrementByAmount(incrementValue))}>Add Amount</button>
        <button onClick={() => dispatch(incrementAsync(incrementValue))}>Add Async</button>
        <button onClick={() => dispatch(incrementIfOdd(incrementValue))}>Add If Odd</button>
      </div>
    </div>
  );
};

export default ReduxTest;
