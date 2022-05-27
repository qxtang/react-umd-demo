import React from 'react';
import { Button, Modal } from 'antd';

const Page1: React.FC = () => {
  const openModal = () => {
    Modal.info({
      title: '打开弹窗'
    });
  };

  return (
    <div>
      <h2>Page1</h2>

      <Button onClick={openModal} type="primary">
        打开弹窗
      </Button>
    </div>
  );
};

export default Page1;
