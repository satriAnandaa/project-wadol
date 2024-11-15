import React, { useEffect, useState } from 'react';
import { Typography, Card, List, Skeleton, Drawer, Form, Input, Button, Popconfirm, message, Col, Row } from "antd";
import { PlusOutlined, EditOutlined, DeleteOutlined, VideoCameraOutlined } from '@ant-design/icons';
import './PageUts.css';
import { deleteData, getData, sendData } from '../../utils/api'; 

const { Title, Text } = Typography;

const PageUts = ({ isOpen }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isDrawer, setIsDrawer] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [form] = Form.useForm();
    const [idSelected, setIdSelected] = useState(null);
    const [dataSource, setDataSource] = useState([]);

    // Fetch data on component mount
    useEffect(() => {
        getDataPlaylist();
    }, []);

    const getDataPlaylist = () => {
        setLoading(true);
        getData("/api/playlist/24")
            .then(resp => {
                setLoading(false);
                console.log("API Response:", resp);
                if (resp && Array.isArray(resp.datas)) {
                    setDataSource(resp.datas); 
                    setData(resp.datas); 
                } else {
                    setError("Invalid response format");
                }
            })
            .catch(err => {
                setLoading(false);
                console.error("Error fetching data:", err);
                setError(err);
            });
    };

    const handleDrawer = () => {
        setIsDrawer(true);
    };

    const onCloseDrawer = () => {
        if (isEdit) {
            setIsEdit(false);
            form.resetFields();
        }
        setIsDrawer(false);
    };

    const handleDrawerEdit = (record) => {
        setIsDrawer(true);
        setIsEdit(true);
        setIdSelected(record?.id_play);
        form.setFieldsValue({
            play_name: record?.play_name,
            play_url: record?.play_url,
            play_thumbnail: record?.play_thumbnail,
            play_genre: record?.play_genre,
            play_description: record?.play_description
        });
    };

    const handleSubmit = () => {
        const playName = form.getFieldValue("play_name");
        const playUrl = form.getFieldValue("play_url");
        const playThumbnail = form.getFieldValue("play_thumbnail");
        const playGenre = form.getFieldValue("play_genre");
        const playDescription = form.getFieldValue("play_description");

        const formData = new FormData();
        formData.append("play_name", playName);
        formData.append("play_url", playUrl);
        formData.append("play_thumbnail", playThumbnail);
        formData.append("play_genre", playGenre);
        formData.append("play_description", playDescription);

        const url = isEdit ? `/api/playlist/update/${idSelected}` : "/api/playlist/24";
        sendData(url, formData)
            .then((resp) => {
                if (resp) {
                    showAlert("success", "Data sent successfully", "Data has been saved successfully");
                    form.resetFields();
                    getDataPlaylist(); // Refresh data after submission
                    onCloseDrawer();
                } else {
                    showAlert("error", "Submission failed", "Data could not be saved");
                }
            })
            .catch((err) => {
                console.error(err);
                showAlert("error", "Submission failed", "Data could not be saved");
            });
    };

    const renderDrawer = () => {
        return (
            <Drawer
                title={isEdit ? "Edit Video" : "Create Video"}
                onClose={onCloseDrawer}
                open={isDrawer}
                extra={
                    <Button
                        htmlType="submit"
                        type="primary"
                        onClick={handleSubmit}
                        style={{ backgroundColor: isEdit ? "green" : "blue", color: "white" }}
                    >
                        Submit
                    </Button>
                }
            >
                <Form form={form} layout="vertical">
                    <Form.Item name="play_name" label="Video Name" required>
                        <Input />
                    </Form.Item>
                    <Form.Item name="play_url" label="Video URL" required>
                        <Input />
                    </Form.Item>
                    <Form.Item name="play_thumbnail" label="Thumbnail URL" required>
                        <Input />
                    </Form.Item>
                    <Form.Item name="play_genre" label="Genre" required>
                        <Input />
                    </Form.Item>
                    <Form.Item name="play_description" label="Description" required>
                        <Input.TextArea rows={3} />
                    </Form.Item>
                </Form>
            </Drawer>
        );
    };

    const confirmDelete = (record_id) => {
        showAlert("success", "Data deleted", `Successfully deleted video ${record_id}`);
        const url = `/api/playlist/${record_id}`;
        const params = new URLSearchParams();
        params.append("id", record_id);
        deleteData(url, params)
            .then((resp) => {
                if (resp?.status === 200) {
                    showAlert("success", "Data deleted", "Video deleted successfully");
                    getDataPlaylist(); // Refresh data after deletion
                    form.resetFields();
                    onCloseDrawer();
                } else {
                    showAlert("error", "Failed", "Failed to delete video");
                }
            })
            .catch((err) => {
                console.error(err);
                showAlert("error", "Failed", "Failed to delete video");
            });
    };

    const showAlert = (type, title, description) => {
        message[type]({
            content: description,
            duration: 3,
        });
    };

    if (loading) return <Skeleton active />;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div className={`flex-1 page-container ${isOpen ? "md:ml-44" : "ml-16"} transition-all duration-300 dark:bg-slate-800`}>
            <Row gutter={[24, 0]}>
                <Col xs={24} className="mb-24">
                    <Card bordered={false} className="circle-box h-full w-full">
                        <Title level={2}>Video Playlist</Title>
                        <Button
                            type="primary"
                            icon={<PlusOutlined />}
                            onClick={handleDrawer}
                            style={{ marginBottom: '20px' }}
                        >
                            Add New Video
                        </Button>
                        {renderDrawer()}
                        <List
                            grid={{ gutter: 16, column: 4 }}
                            dataSource={dataSource}
                            renderItem={(item) => (
                                <List.Item key={item.id}>
                                    <Card
                                        hoverable
                                        cover={<img alt={item.play_name} src={item.play_thumbnail} />}
                                        actions={[
                                            <Button
                                                type="link"
                                                icon={<EditOutlined />}
                                                onClick={() => handleDrawerEdit(item)}
                                            >
                                                Edit
                                            </Button>,
                                            <Popconfirm
                                                title="Are you sure you want to delete this video?"
                                                onConfirm={() => confirmDelete(item.id_play)}
                                                okText="Yes"
                                                cancelText="No"
                                            >
                                                <Button type="link" icon={<DeleteOutlined />} danger>
                                                    Delete
                                                </Button>
                                            </Popconfirm>,
                                        ]}
                                    >
                                        <Card.Meta
                                            title={<><VideoCameraOutlined /> {item.play_name}</>}
                                            description={`Genre: ${item.play_genre}`}
                                        />
                                        <Text type="secondary" className="description-text">
                                            {item.play_description}
                                        </Text>
                                        <Button type="link" href={item.play_url} target="_blank" icon={<VideoCameraOutlined />}>
                                            Watch here
                                        </Button>
                                        <Text type="secondary" style={{ display: 'block', marginTop: '10px' }}>
                                            Created at: {new Date(item.created_at).toLocaleDateString()}
                                        </Text>
                                        <Text type="secondary">
                                            Updated at: {new Date(item.updated_at).toLocaleDateString()}
                                        </Text>
                                    </Card>
                                </List.Item>
                            )}
                        />
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default PageUts;
