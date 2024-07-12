import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CalculatorState {
  value: string;
  total: number;
}

const initialState: CalculatorState = {
  value: '',
  total: 0,
};

export const CalculatorSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increaseBy: (state, action: PayloadAction<string>) => {
      const lastChar = state.value.slice(-1);
      const newChar = action.payload;

      if (
        ['+', '-', '*', '/'].includes(lastChar) &&
        ['+', '-', '*', '/'].includes(newChar)
      ) {
        return;
      }

      state.value += newChar;
    },
    reset: (state) => {
      state.value = '';
      state.total = 0;
    },
    decrease: (state) => {
      state.value = state.value.slice(0, -1);
    },
    calculate: (state) => {
      try {
        state.total = eval(state.value);
      } catch (e) {
        state.total = 0;
      }
    },
  },
});

export const CalculatorReduce = CalculatorSlice.reducer;

export const { increaseBy, calculate, reset, decrease } =
  CalculatorSlice.actions;
