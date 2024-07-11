import { Calculator } from './containers/Calculator/Calculator';
import { ConfigProvider, theme } from 'antd';
import { blue } from '@ant-design/colors';

export const App = () => {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        token: {
          colorPrimaryText: '#000',
          colorPrimary: blue[6],
        },
      }}
    >
      <Calculator />
    </ConfigProvider>
  );
};
