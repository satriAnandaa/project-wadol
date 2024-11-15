import React, { useState } from 'react';
import { Table, Button, Modal, Form, Input, InputNumber, Pagination } from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';

const initialData = [
  {
    id: 1,
    receiptName: "DolphinSunrise",
    Harga: "$500",
    Deskripsi: "Tur mengamati lumba-lumba di pagi hari dengan pemandu berpengalaman.",
  },
  {
    id: 2,
    receiptName: "SeaDolphin",
    Harga: "$200",
    Deskripsi: "Kesempatan berenang bersama lumba-lumba di habitat alami mereka.",
  },
  {
    id: 3,
    receiptName: "SeaDolphin",
    Harga: "$200",
    Deskripsi: "Kesempatan berenang bersama lumba-lumba di habitat alami mereka.",
  },
  {
    id: 4,
    receiptName: "SeaDolphin",
    Harga: "$200",
    Deskripsi: "Kesempatan berenang bersama lumba-lumba di habitat alami mereka.",
  },
  {
    id: 5,
    receiptName: "SeaDolphin",
    Harga: "$200",
    Deskripsi: "Kesempatan berenang bersama lumba-lumba di habitat alami mereka.",
  },
  {
    id: 6,
    receiptName: "WatchingDol",
    Harga: "$150",
    Deskripsi: "Tur lumba-lumba saat matahari terbenam, dilengkapi dengan minuman ringan.",
  },
  {
    id: 7,
    receiptName: "LetsDolphin",
    Harga: "$300",
    Deskripsi: "Snorkeling bersama lumba-lumba dengan perlengkapan yang disediakan.",
  },
];

const Tabel = () => {
  const [data, setData] = useState(initialData);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingRecord, setEditingRecord] = useState(null);
  const [form] = Form.useForm();

  // Columns for the Table
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Nama Jasa',
      dataIndex: 'receiptName',
      key: 'receiptName',
    },
    {
      title: 'Harga',
      dataIndex: 'Harga',
      key: 'Harga',
    },
    {
      title: 'Deskripsi',
      dataIndex: 'Deskripsi',
      key: 'Deskripsi',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <div className="flex gap-2">
          <Button icon={<EditOutlined />} onClick={() => onEdit(record)} />
          <Button icon={<DeleteOutlined />} danger onClick={() => onDelete(record.id)} />
        </div>
      ),
    },
  ];

  // CRUD Handlers
  const onAdd = () => {
    setEditingRecord(null);
    form.resetFields();
    setIsModalVisible(true);
  };

  const onEdit = (record) => {
    setEditingRecord(record);
    form.setFieldsValue(record);
    setIsModalVisible(true);
  };

  const onDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const onFinish = (values) => {
    if (editingRecord) {
      setData(data.map((item) => (item.id === editingRecord.id ? { ...editingRecord, ...values } : item)));
    } else {
      setData([...data, { ...values, id: data.length + 1 }]);
    }
    setIsModalVisible(false);
    form.resetFields();
  };

  return (
    <div className="p-5 bg-white dark:bg-slate-600 dark:text-slate-300 rounded-lg w-full ">
      <Button type="primary" icon={<PlusOutlined />} onClick={onAdd} className="mb-4">
        Add Jasa Tour Dolphin
      </Button>
      <Table
        columns={columns}
        dataSource={data}
        rowKey="id"
        pagination={{
          pageSize: 4,
          showQuickJumper: true,
          showTotal: (total) => `Total ${total} items`,
        }}
         rowClassName="dark:bg-slate-700 dark:text-white"
      />

      <Modal
        title={editingRecord ? 'Edit Jasa' : 'Add Jasa'}
        open={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
      >
        <Form form={form} layout="vertical" onFinish={onFinish}>
          <Form.Item name="receiptName" label="Nama Jasa" rules={[{ required: true, message: 'Masukkan Nama Jasa' }]}>
            <Input />
          </Form.Item>
          <Form.Item name="Harga" label="Harga" rules={[{ required: true, message: 'Masukkan Harga' }]}>
            <InputNumber prefix="$" style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item name="Deskripsi" label="Deskripsi" rules={[{ required: true, message: 'Masukkan Deskripsi' }]}>
            <Input.TextArea rows={3} />
          </Form.Item>
          <Button type="primary" htmlType="submit">
            {editingRecord ? 'Update' : 'Add'}
          </Button>
        </Form>
      </Modal>
    </div>
  );
};

export default Tabel;
