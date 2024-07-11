import React from 'react';
import { Button } from 'antd';

interface Props extends React.PropsWithChildren {
  onClick: VoidFunction;
  iconUrl?: string;
}

export const ButtonItem: React.FC<Props> = ({ onClick, iconUrl, children }) => {
  return (
    <Button onClick={onClick} size={'large'} className={'btn'} type={'primary'}>
      {iconUrl ? (
        <img className={'btn-with-icon'} src={iconUrl} alt={iconUrl} />
      ) : (
        children
      )}
    </Button>
  );
};
