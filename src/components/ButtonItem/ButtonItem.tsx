import React from 'react';
import { Button } from 'antd';

interface Props extends React.PropsWithChildren {
  onClick: VoidFunction;
  width?: number;
  height?: number;
  colorHex?: string;
}

export const ButtonItem: React.FC<Props> = ({
  onClick,
  width = 75,
  height = 75,
  colorHex = '#0050b3',
  children,
}) => {
  return (
    <Button
      onClick={onClick}
      size={'large'}
      className={'btn'}
      shape={'round'}
      type={'primary'}
      style={{ width: width, height: height, backgroundColor: colorHex }}
    >
      {children === '*' ? '×' : children === '/' ? '÷' : children}
    </Button>
  );
};
