import { Flex, Typography } from 'antd';
import { AnimatedText } from '../AnimatedText/AnimatedText';

export const CalculatorDisplay = ({
  value,
  total,
}: {
  value: string;
  total: number;
}) => {
  const displayedTotal =
    total === 0 ? (
      <Typography.Title style={{ marginBottom: 0 }}>&nbsp;</Typography.Title>
    ) : (
      <AnimatedText text={total.toString()} />
    );
  const displayedValue =
    value === '' ? (
      <Typography.Title
        type='secondary'
        style={{ marginBottom: 0, fontWeight: 'normal' }}
      >
        0
      </Typography.Title>
    ) : (
      <AnimatedText text={value} />
    );

  return (
    <Flex vertical justify='center' gap='small'>
      <Flex align='end' vertical>
        {displayedTotal}
        <Typography.Title
          style={{ marginTop: 0, fontWeight: 'normal' }}
          type='secondary'
          level={2}
        >
          {displayedValue}
        </Typography.Title>
      </Flex>
    </Flex>
  );
};
