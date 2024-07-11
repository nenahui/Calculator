import { configureStore } from '@reduxjs/toolkit';
import {
  CalculatorReduce,
  CalculatorState,
} from '../containers/Calculator/CalculatorSlice';

export const store = configureStore<{ counter: CalculatorState }>({
  reducer: {
    counter: CalculatorReduce,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
