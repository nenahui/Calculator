import { FloatButton } from 'antd';
import { CustomerServiceOutlined } from '@ant-design/icons';

export const App = () => {
  return (
    <>
      <FloatButton
        shape='square'
        type='primary'
        style={{ right: 24 }}
        icon={<CustomerServiceOutlined />}
      />
    </>
  );
};
