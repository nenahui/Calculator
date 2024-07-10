import React from 'react';
import { Button } from 'antd';

export const ButtonItem: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Button size={'large'} className={'btn'} type={'primary'}>
      {children}
    </Button>
  );
};
