import { ButtonItem } from './components/ButtonItem/ButtonItem';
import { Flex } from 'antd';
import { NUMBERS } from './constants';

export const App = () => {
  return (
    <div className={'container'}>
      ˙
      <Flex wrap={'wrap-reverse'} gap={10}>
        {NUMBERS.map((num) => (
          <ButtonItem>{num}</ButtonItem>
        ))}
      </Flex>
    </div>
  );
};
