import { ButtonItem } from './components/ButtonItem/ButtonItem';
import { Flex, Typography } from 'antd';
import { NUMBERS, SYMBOLS } from './constants';

export const App = () => {
  return (
    <div className={'container'}>
      <Flex vertical justify={'center'} gap={'100px'} style={{ height: '90%' }}>
        <Flex align={'end'} vertical>
          <Typography.Title
            style={{ marginBottom: 0 }}
            type={'secondary'}
            level={2}
          >
            300
          </Typography.Title>
          <Typography.Title style={{ marginTop: 0 }}>= 400</Typography.Title>
        </Flex>

        <Flex justify={'center'} align={'end'} gap={6}>
          <Flex justify={'space-between'} gap={10} wrap={'wrap-reverse'}>
            {NUMBERS.map((num) => (
              <ButtonItem>{num}</ButtonItem>
            ))}
          </Flex>
          <Flex gap={10} justify={'space-between'} vertical>
            {SYMBOLS.map((sym) => (
              <ButtonItem>{sym}</ButtonItem>
            ))}
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
};
