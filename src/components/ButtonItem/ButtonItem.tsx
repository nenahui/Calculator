import React from 'react';
import { Button } from 'antd';

export const ButtonItem: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Button
      size={'large'}
      style={{ width: 90, height: 90, fontSize: 26 }}
      type={'primary'}
    >
      {children}
    </Button>
  );
};
