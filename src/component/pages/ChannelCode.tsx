import React from 'react';
import { Table, Button, Modal } from 'antd';

const ChannelCode: React.FC = () => {

  const dataSource = new Array(20).fill(null).map((_, index) => {
    index += 1;
    return {
      id: index,
      name: `渠道码${index}`,
      proj_name: `项目${index}`,
      status: Math.random() > 0.5 ? '正常' : '异常'
    };
  });

  const openModal = () => {
    Modal.info({
      title: '打开弹窗'
    });
  };

  return (
    <div>
      <Table
        size="small"
        title={() => (<h2>渠道码管理</h2>)}
        rowKey={r => r.id}
        dataSource={dataSource}
        columns={[
          {
            title: '渠道码名称',
            dataIndex: 'name',
            key: 'name',
          },
          {
            title: '项目名称',
            dataIndex: 'proj_name',
            key: 'proj_name',
          },
          {
            title: '状态',
            dataIndex: 'status',
            key: 'status',
          },
          {
            title: '操作',
            dataIndex: 'opt',
            key: 'opt',
            render: () => {
              return (
                <Button.Group size="small">
                  <Button onClick={openModal} type="primary">编辑</Button>
                  <Button onClick={openModal} type="primary" ghost>删除</Button>
                </Button.Group>
              );
            }
          },
        ]}
      />
    </div>
  );
};

export default ChannelCode;
