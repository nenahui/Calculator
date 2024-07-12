import { ButtonItem } from '../../components/ButtonItem/ButtonItem';
import { NUMBERS, SYMBOLS } from '../../constants';
import { Flex } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { calculate, decrease, increaseBy, reset } from './CalculatorSlice';
import { CalculatorDisplay } from '../../components/CalculatorDisplay/CalculatorDisplay';

export const Calculator = () => {
  const calculatorValue = useSelector(
    (state: RootState) => state.counter.value
  );
  const calculatorTotal = useSelector(
    (state: RootState) => state.counter.total
  );
  const dispatch = useDispatch();

  return (
    <div className={'container'}>
      <CalculatorDisplay value={calculatorValue} total={calculatorTotal} />
      <Flex justify='center' align='end' gap={6}>
        <Flex justify='space-between' gap={10} wrap='wrap-reverse'>
          {NUMBERS.map((num) => (
            <ButtonItem key={num} onClick={() => dispatch(increaseBy(num))}>
              {num}
            </ButtonItem>
          ))}
          <ButtonItem onClick={() => dispatch(reset())} colorHex='#434343'>
            AC
          </ButtonItem>
          <ButtonItem onClick={() => dispatch(decrease())} colorHex='#434343'>
            ⌫
          </ButtonItem>
        </Flex>
        <Flex gap={10} justify='space-between' vertical>
          {SYMBOLS.map((sym) => (
            <ButtonItem
              key={sym}
              height={53.5}
              onClick={() => dispatch(increaseBy(sym))}
              colorHex='#003a8c'
            >
              {sym}
            </ButtonItem>
          ))}
          <ButtonItem onClick={() => dispatch(calculate())} colorHex='#003a8c'>
            =
          </ButtonItem>
        </Flex>
      </Flex>
    </div>
  );
};
