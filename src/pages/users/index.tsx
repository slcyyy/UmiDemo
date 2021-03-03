/*
 * @Date: 2021-02-02 09:46:43
 * @LastEditors: LuoChun
 * @LastEditTime: 2021-02-20 15:49:16
 */
import React from 'react';
import { Table, Tag, Space } from 'antd';
import { connect } from 'umi';

const index = ({ users }) => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <a>编辑</a>&nbsp;&nbsp;&nbsp;
          <a>删除</a>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <Table
        style={{ width: '50%', padding: '10px', margin: '0 auto' }}
        rowKey="id"
        columns={columns}
        dataSource={users.data}
      />
    </div>
  );
};

//{users:[]} 从state对象映射到props;users loading
// const mapStateToProps = ({users})=>{
//   return {
//    users
//   }
// }

//可以省略为
const mapStateToProps = ({ users }) => ({
  users,
});

//connect 绑定数据到组件
export default connect(mapStateToProps)(index);
