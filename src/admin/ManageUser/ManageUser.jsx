import { PlusOutlined, InsertRowAboveOutlined, UserOutlined, CalendarOutlined, MailOutlined, EditOutlined, DeleteOutlined, PhoneOutlined, KeyOutlined } from "@ant-design/icons";
import { Select, Form, Button, Input, Table, Tag, Space } from "antd";
import dayjs from "dayjs";
function ManageUser() {
    const columns = [
        {
            title: '#',
            dataIndex: 'stt',
            key: 'stt',
        },
        {
            title: 'Mã',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Tên người dùng',
            dataIndex: 'name',
            key: 'name',
            render: text => (
                <span>
                    <UserOutlined className="mr-2" />
                    {text.toUpperCase()}
                </span>
            )
        },
        {
            title: 'Loại tài khoản',
            dataIndex: 'positions',
            key: 'positions',
            render: (_, { positions }) => (
                <>
                    {positions.map(position => {
                        let color;
                        if (position === 'Học sinh') {
                            color = 'blue';
                        } else if (position === 'Giáo viên') {
                            color = 'gold';
                        } else {
                            color = 'red';
                        }
                        return (
                            <Tag color={color} key={position}>
                                {position}
                            </Tag>
                        );
                    })}
                </>
            )
        },

        {
            title: 'Cấp',
            dataIndex: 'levels',
            key: 'levels',
            render: (_, { levels }) => (
                <>
                    {levels.map(level => {
                        let color;
                        if (level === 'Cấp 1') {
                            color = 'blue';
                        } else if (level === 'Cấp 2') {
                            color = 'gold';
                        } else {
                            color = 'red';
                        }


                        return (
                            <Tag color={color} key={level}>
                                {level}
                            </Tag>
                        );
                    })}
                </>
            ),
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
            render: email => (
                <span>
                    <MailOutlined className="mr-2" />
                    {email}
                </span>
            )
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone',
            render: phone => (
                <span>
                    <PhoneOutlined className="mr-2" />
                    {phone}
                </span>
            )
        },
        {
            title: 'Ngày tạo',
            dataIndex: 'createdAt',
            key: 'createdAt',
            render: date => (
                <span>
                    <CalendarOutlined className="mr-2" />
                    {dayjs(date).format('DD/MM/YYYY HH:mm')}
                </span>
            )
        },
        {
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <Button shape="circle" icon={<EditOutlined />} type="dashed" />
                    <Button shape="circle" icon={<KeyOutlined />} type="dashed" />
                    <Button shape="circle" icon={<DeleteOutlined />} danger type="dashed" />

                </Space>
            ),
        },
    ];

    const data = [
        {
            stt: '1',
            id: '7326',
            name: 'John Brown',
            positions: ['Học sinh'],
            levels: ['Cấp 1'],
            email: 'John Brown@gmail.com',
            phone: '273537829',
            createdAt: '2025-07-19T14:20:00Z'

        },
        {
            stt: '2',
            id: '7236',
            name: 'Anh nien',
            positions: ['Học sinh'],
            levels: ['Cấp 3'],
            email: 'nien@gmail.com',
            phone: '273237829',
            createdAt: '2025-07-18T09:10:00Z'


        },
        {
            stt: '3',
            id: '5686',
            name: 'Thanh huyền',
            positions: ['Học sinh'],
            levels: ['Cấp 2'],
            email: 'tth@gmail.com',
            phone: '272626267829',
            createdAt: '2025-07-17T16:30:00Z'
        },
    ];

    return (
       
            <div className="  mx-auto mt-4">
                {/* Title */}
                <div className="flex flex-row justify-between py-6 border-b border-gray-300">
                    <div className="uppercase text-xl font-medium">
                        Quản lý người dùng
                    </div>
                    <div className="flex space-x-2 text-sm">
                        <button className="border rounded border-gray-400 px-2">
                            <PlusOutlined /> Thêm người dùng
                        </button>
                        <button className="border rounded border-gray-400 px-2">
                            <InsertRowAboveOutlined /> Nhập từ excel
                        </button>
                    </div>
                </div>

                {/* select, filter, search */}
                <div className="py-4">
                    <Form layout="inline" className="flex flex-col md:flex-row md:items-end md:space-x-4 space-y-3 md:space-y-0">
                        <Form.Item name="position" label="Loại tài khoản" className="flex-1">
                            <Select
                                showSearch
                                placeholder="Chọn một chức vụ"
                                filterOption={(input, option) =>
                                    option?.label?.toLowerCase().includes(input.toLowerCase())
                                }
                                options={[
                                    { value: '1', label: 'Học sinh' },
                                    { value: '2', label: 'Giáo viên' },
                                    { value: '3', label: 'Nhân viên' },
                                ]}
                            />
                        </Form.Item>

                        <Form.Item name="level" label="Cấp" className="flex-1">
                            <Select
                                showSearch
                                placeholder="Chọn loại"
                                filterOption={(input, option) =>
                                    option?.label?.toLowerCase().includes(input.toLowerCase())
                                }
                                options={[
                                    { value: '1', label: 'Tất cả' },
                                    { value: '2', label: 'Cấp 1' },
                                    { value: '3', label: 'Cấp 2' },
                                    { value: '4', label: 'Cấp 3' },
                                ]}
                            />
                        </Form.Item>

                        <Form.Item label="Email" name="email">
                            <Input type="email" />
                        </Form.Item>

                        <Form.Item label="Điện Thoại" name="number">
                            <Input type="text" />
                        </Form.Item>

                        <Form.Item className="flex-none">
                            <Button type="primary" htmlType="submit">
                                Tìm kiếm
                            </Button>
                        </Form.Item>
                    </Form>
                </div>

                {/* Table */}
                <Table columns={columns} dataSource={data} bordered />
            </div>
    
     
    );
}

export default ManageUser;
