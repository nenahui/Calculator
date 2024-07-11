import { ButtonItem } from '../../components/ButtonItem/ButtonItem';
import { NUMBERS, SYMBOLS } from '../../constants';
import { Flex, Typography } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { calculate, decrease, increaseBy, reset } from './CalculatorSlice';

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
      <Flex vertical justify={'center'} gap={'100px'} style={{ height: '90%' }}>
        <Flex align={'end'} vertical>
          <Typography.Title
            style={{ marginBottom: 0 }}
            type={'secondary'}
            level={2}
          >
            {calculatorValue}
          </Typography.Title>
          <Typography.Title style={{ marginTop: 0 }}>
            = {calculatorTotal}
          </Typography.Title>
        </Flex>

        <Flex justify={'center'} align={'end'} gap={6}>
          <Flex justify={'space-between'} gap={10} wrap={'wrap-reverse'}>
            {NUMBERS.map((num) => (
              <ButtonItem key={num} onClick={() => dispatch(increaseBy(num))}>
                {num}
              </ButtonItem>
            ))}
            <ButtonItem onClick={() => dispatch(reset())}>AC</ButtonItem>
            <ButtonItem onClick={() => dispatch(decrease())}> ⌫</ButtonItem>
          </Flex>
          <Flex gap={10} justify={'space-between'} vertical>
            {SYMBOLS.map((sym) => (
              <ButtonItem key={sym} onClick={() => dispatch(increaseBy(sym))}>
                {sym}
              </ButtonItem>
            ))}
            <ButtonItem onClick={() => dispatch(calculate())}>=</ButtonItem>
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
};
