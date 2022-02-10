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
  },
  block: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 10
  },
  count: {
    margin: '0 10px'
  }
};

const ReduxTest: React.FC = () => {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');
  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div style={styles.container}>
      <h2>Redux 测试页</h2>

      <div style={styles.block}>
        <button onClick={() => dispatch(decrement())}>-</button>
        <span style={styles.count}>{count}</span>
        <button onClick={() => dispatch(increment())}>+</button>
      </div>
      <div style={styles.block}>
        <input value={incrementAmount} onChange={e => setIncrementAmount(e.target.value)} />
        <button onClick={() => dispatch(incrementByAmount(incrementValue))}>Add Amount</button>
        <button onClick={() => dispatch(incrementAsync(incrementValue))}>Add Async</button>
        <button onClick={() => dispatch(incrementIfOdd(incrementValue))}>Add If Odd</button>
      </div>
    </div>
  );
};

export default ReduxTest;
