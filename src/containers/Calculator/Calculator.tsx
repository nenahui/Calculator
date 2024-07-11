import { ButtonItem } from '../../components/ButtonItem/ButtonItem';
import { NUMBERS, SYMBOLS } from '../../constants';
import { Flex, Typography } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { calculate, decrease, increaseBy, reset } from './CalculatorSlice';
import { motion } from 'framer-motion';

const defaultAnimation = {
  visible: {
    opacity: 1,
  },
  hidden: {
    opacity: 0,
  },
};

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
      <Flex vertical justify={'center'} gap={'small'} style={{ height: '90%' }}>
        <Flex align={'end'} vertical>
          {calculatorTotal === 0 ? (
            <Typography.Title style={{ marginBottom: 0 }}>
              &nbsp;
            </Typography.Title>
          ) : (
            <motion.div
              initial={'hidden'}
              animate={'visible'}
              transition={{ staggerChildren: 0.1 }}
            >
              <Typography.Title
                style={{ marginBottom: 0, fontWeight: 'normal' }}
              >
                {calculatorTotal
                  .toString()
                  .split('')
                  .map((char) => (
                    <motion.span variants={defaultAnimation}>
                      {char}
                    </motion.span>
                  ))}
              </Typography.Title>
            </motion.div>
          )}
          <Typography.Title
            style={{ marginTop: 0, fontWeight: 'normal' }}
            type={'secondary'}
            level={2}
          >
            {calculatorValue === '' ? (
              <Typography.Title
                type={'secondary'}
                style={{ marginBottom: 0, fontWeight: 'normal' }}
              >
                0
              </Typography.Title>
            ) : (
              <motion.div
                initial={'hidden'}
                animate={'visible'}
                transition={{ staggerChildren: 0.1 }}
              >
                <Typography.Title
                  type={'secondary'}
                  style={{ marginBottom: 0, fontWeight: 'normal' }}
                >
                  {calculatorValue.split('').map((num) => (
                    <motion.span variants={defaultAnimation}>{num}</motion.span>
                  ))}
                </Typography.Title>
              </motion.div>
            )}
          </Typography.Title>
        </Flex>

        <Flex justify={'center'} align={'end'} gap={6}>
          <Flex justify={'space-between'} gap={10} wrap={'wrap-reverse'}>
            {NUMBERS.map((num) => (
              <ButtonItem key={num} onClick={() => dispatch(increaseBy(num))}>
                {num}
              </ButtonItem>
            ))}
            <ButtonItem onClick={() => dispatch(reset())} colorHex={'#434343'}>
              AC
            </ButtonItem>
            <ButtonItem
              onClick={() => dispatch(decrease())}
              colorHex={'#434343'}
            >
              {' '}
              ⌫
            </ButtonItem>
          </Flex>
          <Flex gap={10} justify={'space-between'} vertical>
            {SYMBOLS.map((sym) => (
              <ButtonItem
                key={sym}
                height={53.5}
                onClick={() => dispatch(increaseBy(sym))}
                colorHex={'#003a8c'}
              >
                {sym}
              </ButtonItem>
            ))}
            <ButtonItem
              onClick={() => dispatch(calculate())}
              colorHex={'#003a8c'}
            >
              =
            </ButtonItem>
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
};
